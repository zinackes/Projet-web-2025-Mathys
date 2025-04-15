<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\User;
use App\Models\UserCohort;
use App\Models\UserGroup;
use App\Services\GeminiService;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Log\Logger;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Date;

class GroupController extends Controller
{


    /**
     * Display the page
     *
     * @return Factory|View|Application|object
     */
    public function index()
    {

        // get user id and user in cohort
        $userId = auth()->user()->id;
        $userCohort = UserCohort::where('user_id', $userId)->first();


        /*$studentsInCohort = UserCohort::where('cohort_id', $userCohort->cohort_id)->get();
        $studentIds = $studentsInCohort->pluck('user_id');

        $studentsGroups = UserGroup::whereIn('user_id', $studentIds)->get();*/


        if (auth()->user()->school()->pivot->role === "admin") {

            // Get all groups id by group name
            $uniqueGroupIds = Group::selectRaw('MIN(id) as id')
                ->groupBy('project_name')
                ->pluck('id');

            // get all groups
            $groups = Group::whereIn('id', $uniqueGroupIds)->get();
        } else {

            $cohortId = $userCohort->cohort_id;

            // Get all groups id by group name from 1 cohort
            $uniqueGroupIds = Group::where('cohort_id', $cohortId)
                ->selectRaw('MIN(id) as id')
                ->groupBy('project_name')
                ->pluck('id');

            $groups = Group::whereIn('id', $uniqueGroupIds)->get();
        }

        return view('pages.groups.index', [
            'groups' => $groups
        ]);
    }


    public function dashboard($group_name, Request $request)
    {

        // get group
        $group = Group::where('id', $request->group)->first();


        return view('pages.groups.dashboard',
        ['group' => $group,]
        );
    }

    public function getInfo($id)
    {
        $group = Group::find($id);


        if (!$group) {
            return response()->json(['error' => 'Group not found'], 404);
        }

        return response()->json($group);
    }

    public function updateGithub(Request $request) {

        // Update github link for group
        Group::where('id', $request->group_id)->update([
            'github_link' => $request->github_link,
        ]);

        return redirect()->back();
    }


    public function show($project_name) {

        // decrypt project name
        $decryptedName = Crypt::decryptString($project_name);

        // get all group id from the same project name
        $groups = Group::where('project_name', $decryptedName)->get();
        $groupsId = $groups->pluck('id');

        // get groups from project id and group them
        $studentsByGroup = UserGroup::whereIn('group_id', $groupsId)
            ->get()
            ->groupBy('group_id');

        return view('pages.groups.show', [
            'groups' => $groups,
            'studentsByGroup' => $studentsByGroup
        ]);

    }

    public function generate(Request $request, GeminiService $gemini)
    {
        $cohortId = $request->cohort_id;

        $studentsInCohort = UserCohort::where('cohort_id', $cohortId)->get();
        $studentIds = $studentsInCohort->pluck('user_id');

        // Get the students (excluding admin and teacher role)
        $students = User::whereIn('id', $studentIds)
            ->get()
            ->filter(fn($u) => optional($u->school())->pivot->role === 'student' || is_null(optional($u->school())->pivot->role));


        $studentsJson = json_encode($students->toArray(), JSON_PRETTY_PRINT);

        // get students in groups
        $studentsGroups = UserGroup::whereIn('user_id', $studentIds)->get();
        $studentsInGroupsIds = $studentsGroups->pluck('user_id');
        $studentsInGroups = User::whereIn('id', $studentsInGroupsIds)->get();

        // transform students in groups to json
        $studentsInGroupsJson = json_encode($studentsGroups->toArray(), JSON_PRETTY_PRINT);

        $totalStudents = $students->count();

        $rules = [
            'numberGroup' => "required|integer|min:1",
            'numberUsersInGroups' => 'required|integer|min:1',
            'project_name' => 'nullable|string|max:255',
        ];

        $messages = [
            'numberGroup.required' => 'Le nombre de groupes est obligatoire.',
            'numberGroup.integer' => 'Le nombre de groupes doit être un entier.',
            'numberGroup.min' => 'Le nombre de groupes doit être d\'au moins 1.',

            'numberUsersInGroups.required' => 'Le nombre d\'étudiants par groupe est obligatoire.',
            'numberUsersInGroups.integer' => 'Le nombre d\'étudiants par groupe doit être un entier.',
            'numberUsersInGroups.min' => 'Il doit y avoir au moins un étudiant par groupe.',
        ];



        // prompt to generate groups
        $prompt = "
[STRICT INSTRUCTIONS - JSON OUTPUT ONLY]
Vous êtes un moteur de calcul ultra strict.

Votre mission est de répartir une promotion d'étudiants en groupes, en respectant **strictement** les règles suivantes.

---

1. Liste des étudiants :

Vous recevez ci-dessous la **liste UNIQUE et DÉFINITIVE** des étudiants pour la promotion \"{$studentsJson}\".

Chaque étudiant est représenté par :
- \"id\" (identifiant entier unique)
- \"last_name\" (chaîne de caractères)
- \"first_name\" (chaîne de caractères)
- \"grade\" (moyenne sur 20, nombre décimal)

❗Vous devez OBLIGATOIREMENT utiliser **tous les étudiants exactement tels qu’ils sont fournis**, sans en inventer, modifier ou omettre **aucun**.

---

2. Objectif de la répartition :

🎯 But principal : créer **environ {$request->numberGroup} groupes**, dans le respect des conditions suivantes :

- Aucun groupe ne doit contenir **moins de {$request->numberUsersInGroups} étudiants**.
- Il est possible que certains groupes aient plus d’étudiants, mais la différence entre tailles de groupe doit rester minimale.
- Il est **interdit** d’avoir plus que {$request->numberGroup} groupes.
- Le total d’étudiants répartis doit être exactement **{$students->count()}**.

---

3. Équilibrage strict des groupes par moyenne :

🎯 Objectif absolu : **minimiser l’écart entre les moyennes des groupes**.

Vous devez :
- Répartir les étudiants pour que les **moyennes des notes (“grade”) de chaque groupe soient aussi proches que possible**.
- Visez un écart **inférieur à 1.00** entre la moyenne la plus basse et la plus haute. Cet écart doit être **le plus petit possible**.
- Pour cela, **mélangez systématiquement des étudiants forts et faibles** dans chaque groupe (par exemple : pairing des extrêmes, stratégie de type “haut-bas-haut-bas”).

📐 Calcul attendu :
- Moyenne d’un groupe = somme des grades ÷ nombre d’étudiants
- Affichez les moyennes avec **2 décimales**.

💡 Toute répartition où un groupe contient des notes trop homogènes (tous forts ou tous faibles) est invalide.

---

4. Historique des paires à éviter :

Utilisez l’historique suivant :
{$studentsInGroupsJson}

- Chaque paire d’étudiants déjà ensemble dans un ancien groupe doit **être évitée autant que possible**.
- S’il est impossible d’éviter **toutes** les paires, vous devez **minimiser le nombre total de paires répétées**, idéalement à zéro.

---

5. Sortie attendue :

Répondez **UNIQUEMENT** avec un JSON conforme exactement à cette structure :

[
  {
    \"group_id\": 0,
    \"students\": [
      {
        \"id\": 10,
        \"first_name\": \"Frank\",
        \"last_name\": \"Moore\",
        \"email\": \"frank.moore@codingfactory.com\",
        \"grade\": 7
      },
      ...
    ]
  },
  ...
]

🚨 Aucune autre sortie n’est acceptée : **pas de texte, pas de commentaires, pas de récapitulatif, seulement le JSON**.
";


        // generate the response
        $responseText = $gemini->generateText($prompt);


        // try to get the json from the ia
        if (preg_match('/```json(.*?)```/s', $responseText, $matches)) {
            $jsonString = trim($matches[1]);
        } else {
            $jsonString = trim($responseText);
        }

        // decode the json
        $decoded = json_decode($jsonString, true);


        // pass the generated json to session and return view
        if (json_last_error() === JSON_ERROR_NONE) {
            session(['generated_groups' => $decoded]);
            return view('pages.groups.promptResult', [
                'groups' => $decoded,
                'studentsInGroups' => $studentsInGroups,
                'project_name' => $request->project_name,
                'request' => $request,
            ]);
        } else {
            return response()->json([
                'error' => 'Erreur lors du décodage JSON : ' . json_last_error_msg(),
                'jsonString' => $jsonString
            ]);
        }
    }


    public function store(Request $request)
    {
        // get the generated json groups
        $groups = session('generated_groups');

        if (!$groups) {
            return redirect()->back()->with('error', 'Les groupes ne sont plus disponibles.');
        }

        // create the number of group from the json;
        foreach ($groups as $group) {
            $createdGroup = Group::create([
                'user_id' => auth()->user()->id,
                'group_name' => "Groupe " . $group['group_id'],
                'description' => 'aucune',
                'start_date' => Date::create(2025, 1, 1, 12, 0, 0),
                'end_date' => Date::create(2025, 1, 1, 12, 0, 0),
                'project_name' =>  $request->project_name
            ]);

            $newGroupId = $createdGroup->id;

            // associate each students in groups to their respective groups
            foreach ($group['students'] as $student) {
                UserGroup::create([
                    'user_id' => $student['id'],
                    'group_id' => $newGroupId,
                    'role' => 'Développeur'
                ]);
            }
        }

        // forget the json
        session()->forget('generated_groups');

        return redirect()->route('cohort.show', $request->cohort_id)
            ->with('success', 'Groupes créés avec succès!');
    }



    public function promptResult(){

        return view('pages.groups.promptResult');
    }
}
