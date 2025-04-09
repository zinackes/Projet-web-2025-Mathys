<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\User;
use App\Models\UserCohort;
use App\Models\UserGroup;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Services\MistralService;
use Illuminate\Support\Str;

class GroupController extends Controller
{
    /**
     * Display the page
     *
     * @return Factory|View|Application|object
     */
    public function index() {
        return view('pages.groups.index');
    }

    public function generate(Request $request, MistralService $mistral)
    {
        $cohortId = $request->cohort_id;

        $studentsInCohort = UserCohort::where('cohort_id', $cohortId)->get();
        $studentIds = $studentsInCohort->pluck('user_id');
        $students = User::whereIn('id', $studentIds)->get();

        $studentsJson = json_encode($students->toArray(), JSON_PRETTY_PRINT);

        $studentsGroups = UserGroup::whereIn('user_id', $studentIds)->get();
        $studentsInGroupsIds = $studentsGroups->pluck('user_id');
        $studentsInGroups = User::whereIn('id', $studentsInGroupsIds)->get();

        $studentsInGroupsJson = json_encode($studentsGroups->toArray(), JSON_PRETTY_PRINT);

        $maxGroupPossible = $request->numberUsersInGroups / $request->numberGroup;

        $rules = [
            'numberGroup' => "required|integer|min:1|max:{$students->count()}",
            'numberUsersInGroups' => 'required|integer|min:1',
        ];

        $messages = [
            'numberGroup.required' => 'Le nombre de groupes est obligatoire.',
            'numberGroup.integer' => 'Le nombre de groupes doit être un entier.',
            'numberGroup.min' => 'Le nombre de groupes doit être d\'au moins 1.',
            'numberUsersInGroups.required' => 'Le nombre d\'utilisateurs par groupe est obligatoire.',
            'numberUsersInGroups.integer' => 'Le nombre d\'utilisateurs par groupe doit être un entier.',
            'numberUsersInGroups.min' => 'Le nombre d\'utilisateurs par groupe doit être d\'au moins 1.',
        ];

        if ($request->numberUsersInGroups) {
            if ($request->numberGroup <= $maxGroupPossible) {
                $rules['numberGroup'] .= "|max:{$maxGroupPossible}";
                $messages['numberGroup.max'] = "Le nombre de groupes ne peut pas être supérieur au ratio d'étudiants ({$maxGroupPossible}).";
            }
        } else {
            $rules['numberGroup'] .= "|max:0";
            $messages['numberGroup.max'] = "Il est nécessaire d'avoir un nombre d'élèves par groupe.";
        }

        $request->validate($rules, $messages);


        $prompt = "
Vous êtes un moteur de calcul ultra strict.

Votre mission est de répartir une promotion d'étudiants en groupes, en respectant **strictement** les règles suivantes.

---

1. Liste des étudiants :

Vous recevez ci-dessous la **liste UNIQUE et DÉFINITIVE** des étudiants pour la promotion \"{$studentsJson}\".

Chaque étudiant est représenté par :
- \\\"id\\\" (identifiant entier unique)
- \\\"last_name\\\" (chaîne de caractères)
- \\\"first_name\\\" (chaîne de caractères)
- \\\"grade\\\" (moyenne sur 20, nombre décimal)

❗Vous devez OBLIGATOIREMENT utiliser **tous les étudiants exactement tels qu’ils sont fournis**, sans en inventer, modifier ou omettre **aucun**.

---

🎯 Votre objectif principal est de répartir les étudiants pour que :
- Les groupes soient de taille équilibrée (pas de groupes très petits à côté de groupes très grands).
- Les moyennes des notes (“grade”) soient les plus proches possibles entre tous les groupes.

---

2. Objectif de la répartition :

- Vous devez viser **environ {$request->numberGroup} groupes**, ce nombre est indicatif.
- Toutefois, si le nombre exact de groupes ne permet pas une répartition équilibrée ou force à créer des groupes trop petits (moins de {$request->numberUsersInGroups} étudiants), alors vous pouvez former **moins de groupes**, mais jamais plus.
- Aucun groupe ne doit contenir **moins de {$request->numberUsersInGroups} étudiants**.
- Il est autorisé que certains groupes aient **plus** de {$request->numberUsersInGroups} étudiants.
- Le nombre total d’étudiants répartis doit être **exactement égal à {$students->count()}**.
- Il est interdit de créer un groupe contenant seulement 1 ou 2 personnes si les autres en ont beaucoup plus.
- Visez un équilibre de taille entre les groupes autant que possible.

---

3. Équilibrage des groupes par moyenne :

🎯 Votre objectif principal est de répartir les étudiants pour que **les moyennes des notes (“grade”) des groupes soient les plus proches possibles entre elles**.

Cela signifie :
- Répartissez les étudiants de façon à équilibrer les moyennes entre les groupes.
- **La différence entre la moyenne la plus haute et la plus basse parmi les groupes doit être la plus faible possible.**
- Mélangez les notes fortes et faibles dans chaque groupe pour éviter les extrêmes.
- Il est interdit de classer simplement par ordre de notes.

📐 Calcul de la moyenne de groupe :
- Moyenne_groupe = (somme des grades du groupe) ÷ (nombre d’étudiants dans le groupe)
- Affichez chaque moyenne avec **2 décimales de précision**.

---

4. Historique des paires à éviter :

- Vous devez utiliser l’historique des anciennes paires fourni ci-dessous :
  {$studentsInGroupsJson}
- Évitez **au maximum** que deux étudiants ayant déjà été dans le même groupe soient à nouveau ensemble.
- Si ce n’est pas totalement évitable, **minimisez le nombre total de paires répétées**.

---

5. Sortie attendue :

Répondez **uniquement** avec un JSON strictement conforme à cette structure :

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

🚨 Aucune autre sortie n’est acceptée : **pas de texte, pas de commentaires, pas d’explication, pas de récapitulatif, seulement le JSON**.
";


        $responseText = $mistral->generateText($prompt);

        if (preg_match('/```json(.*?)```/s', $responseText, $matches)) {
            $jsonString = trim($matches[1]);
        } else {
            $jsonString = trim($responseText);
        }

        $decoded = json_decode($jsonString, true);

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
        $groups = session('generated_groups');

        if (!$groups) {
            return redirect()->back()->with('error', 'Les groupes ne sont plus disponibles.');
        }

        dd($groups);
    }



    public function promptResult(){

        return view('pages.groups.promptResult');
    }
}
