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
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Log\Logger;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Date;

class GroupController extends Controller
{

    use AuthorizesRequests;

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


    /**
     * return view of dashboard with group model
     * @param $group_name
     * @param Request $request
     * @return Factory|View|Application|object
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function dashboard($group_name, Request $request)
    {

        // get group
        $group = Group::where('id', $request->group)->first();


        $this->authorize('viewDashboard', $group);


        return view('pages.groups.dashboard',
        ['group' => $group,]
        );
    }

    /**
     * return json of group model
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function getInfo($id)
    {
        $group = Group::find($id);


        if (!$group) {
            return response()->json(['error' => 'Group not found'], 404);
        }

        return response()->json($group);
    }

    /**
     * update github link in BDD of a group
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function updateGithub(Request $request) {

        $group = Group::where('id', $request->group_id);

        $this->authorize('update', $group);

        // Update github link for group
        $group->update([
            'github_link' => $request->github_link,
        ]);

        return redirect()->back();
    }


    /**
     * return view of a group with all its users and group model
     * @param $project_name
     * @return Factory|View|Application|object
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function show($project_name) {


        // decrypt project name
        $decryptedName = Crypt::decryptString($project_name);

        // get all group id from the same project name
        $groups = Group::where('project_name', $decryptedName)->get();
        $groupsId = $groups->pluck('id');

        $this->authorize('view', $groups->first());

        // get groups from project id and group them
        $studentsByGroup = UserGroup::whereIn('group_id', $groupsId)
            ->get()
            ->groupBy('group_id');


        return view('pages.groups.show', [
            'groups' => $groups,
            'studentsByGroup' => $studentsByGroup
        ]);

    }

    /**
     * Generate group from ai and return json of groups and users
     * @param Request $request
     * @param GeminiService $gemini
     * @return Factory|View|Application|\Illuminate\Http\JsonResponse|object
     * @throws \Illuminate\Auth\Access\AuthorizationException
     * @throws \Illuminate\Http\Client\ConnectionException
     */
    public function generate(Request $request, GeminiService $gemini)
    {

        $this->authorize('create', GroupController::class);

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

Vous recevez ci-dessous la **liste UNIQUE, DÉFINITIVE et VERROUILLÉE** des étudiants pour la promotion \"{$studentsJson}\".

Chaque étudiant est représenté par :
- \"id\" (identifiant entier unique)
- \"last_name\" (chaîne de caractères)
- \"first_name\" (chaîne de caractères)
- \"grade\" (moyenne sur 20, nombre décimal)

⚠️ **IMPORTANT :**
- Vous devez utiliser **exclusivement** les étudiants fournis dans cette liste.
- Il est **formellement interdit** d’inventer, dupliquer, modifier ou omettre un étudiant.
- Le nombre total d’étudiants répartis dans la sortie finale doit être **exactement égal à {$students->count()}**.

---

2. Objectif de la répartition :

🎯 But principal : créer **environ {$request->numberGroup} groupes**, dans le respect des contraintes suivantes :

- Tous les étudiants doivent être répartis **une seule fois chacun**.
- Si les contraintes de taille de groupes ou d’équilibrage des moyennes ne peuvent pas être respectées avec les étudiants fournis, **vous devez recalculer et recommencer**, sans jamais :
  - Ajouter d’étudiants
  - Supprimer d’étudiants
  - Répartir un étudiant plusieurs fois

📌 Toute solution qui ne respecte pas ce point est immédiatement invalide.

---

3. Équilibrage strict des groupes par moyenne :

🎯 Objectif absolu : **minimiser l’écart entre les moyennes des groupes**.

Vous devez :
- Répartir les étudiants pour que les **moyennes des notes (“grade”) de chaque groupe soient aussi proches que possible**.
- Visez un écart **strictement inférieur à 1.00** entre la moyenne la plus basse et la plus haute.
- Appliquer une stratégie de type **pairing des extrêmes** (fort-faible) pour équilibrer chaque groupe.

📐 Moyenne d’un groupe = somme des grades ÷ nombre d’étudiants

⚠️ Si l'écart est trop grand ou si des groupes sont trop homogènes (tous forts ou tous faibles), alors la répartition est invalide et doit être **recalculée** entièrement.

---

4. Historique des paires à éviter :

Historique des anciennes répartitions :
{$studentsInGroupsJson}

Règles :
- Toute paire d’étudiants déjà ensemble dans un groupe doit être **évité autant que possible**.
- S’il est impossible de les éviter toutes, vous devez **minimiser le nombre total de paires répétées**, idéalement à zéro.

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

📌 Si la répartition n’est pas possible selon les critères définis (équilibre, paires à éviter, taille des groupes), **vous devez recalculer jusqu’à obtenir une configuration valide**, toujours **sans jamais ajouter, dupliquer ou supprimer d’étudiants**.
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
                'studentsInGroups' => $students,
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


    /**
     * Store in BDD groups and users in groups
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(Request $request)
    {
        $this->authorize('create', GroupController::class);


        // get the generated json groups
        $groups = session('generated_groups');

        if (!$groups) {
            return redirect()->back()->with('error', 'Les groupes ne sont plus disponibles.');
        }


        // create the number of group from the json;
        foreach ($groups as $group) {
            $createdGroup = Group::create([
                'user_id' => auth()->user()->id,
                'cohort_id' => $request->cohort_id,
                'group_name' => "Groupe " . $group['group_id'],
                'description' => $request->description,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
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


    /**
     * return view to display prompt result
     * @return Factory|View|Application|object
     */
    public function promptResult(){

        return view('pages.groups.promptResult');
    }
}
