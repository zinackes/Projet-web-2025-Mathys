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

    public function store(Request $request, MistralService $mistral)
    {

        $cohortId = $request->cohort_id;

        $studentsInCohort = UserCohort::where('cohort_id', $cohortId)->get();
        $studentIds = $studentsInCohort->pluck('user_id');
        $students = User::whereIn('id', $studentIds)->get();

        $studentsGroups = UserGroup::whereIn('user_id', $studentIds)->get();
        $studentsInGroupsIds = $studentsGroups->pluck('user_id');

        $studentsInGroups = User::whereIn('id', $studentsInGroupsIds)->get();

        $studentsJson = json_encode($students->toArray(), JSON_PRETTY_PRINT);

        $studentsInGroupsJson = json_encode($studentsGroups->toArray(), JSON_PRETTY_PRINT);


        $maxGroupPossible = $request->numberUsersInGroups/$request->numberGroup;


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


        if($request->numberUsersInGroups) {
            if($request->numberGroup <= $maxGroupPossible){
                $rules['numberGroup'] .= "|max:{$maxGroupPossible}";
                $messages['numberGroup.max'] = "Le nombre de groupes ne peut pas être supérieur au ratio d'étudiants ({$maxGroupPossible}).";
            }
        }
        else{
            $rules['numberGroup'] .= "|max:0";
            $messages['numberGroup.max'] = "Il est nécessaire d'avoir un nombres d'eleves par groupes.";
        }




        $request->validate($rules, $messages);


        $prompt = "
Vous êtes un moteur de calcul ultra strict.

Voici votre mission :

1. Vous recevez ci-dessous la liste UNIQUE et DÉFINITIVE des étudiants pour la promotion \"{$studentsJson}\".
   Chaque étudiant est représenté par :
   - \\\"id\\\" (identifiant entier unique)
   - \\\"last_name\\\" (string)
   - \\\"first_name\\\" (string)
   - \\\"grade\\\" (moyenne sur 20, double)

2. Vous devez OBLIGATOIREMENT utiliser tous ces étudiants, exactement tels qu'ils sont fournis, sans inventer, modifier ou ignorer aucun d'entre eux.

3. Votre objectif :
   - Former exactement {$request->numberGroup} groupes.
   - Chaque groupe doit contenir idéalement {$request->numberUsersInGroups} étudiants.
   - Si le nombre exact n'est pas atteignable, répartir équitablement les élèves supplémentaires en respectant l'équilibre général.

4. Répartition par note moyenne :
   - Répartir les étudiants de façon à ce que la moyenne des \\\"grade\\\" des étudiants de chaque groupe soit la plus homogène possible entre tous les groupes.
   - Les écarts entre les moyennes de groupes doivent être minimisés.

5. Calcul :
   - La moyenne de chaque groupe (\\\"moyenne_groupe\\\") doit être calculée avec la formule exacte :
     (somme des grades du groupe) ÷ (nombre d'étudiants du groupe)
   - Le résultat doit être un nombre flottant avec 2 décimales de précision.

Si une seule de ces règles est violée (ajout d'un élève inventé, mauvaise moyenne, élève manquant, etc.), le résultat sera invalide.

---

Contrainte supplémentaire :

- Vous devez utiliser l'historique des anciennes paires fournies ci-dessous.
- Évitez au maximum que deux étudiants ayant déjà été dans le même groupe se retrouvent ensemble à nouveau.
- Si ce n'est pas totalement évitable, minimisez le nombre de répétitions au maximum.

Anciennes paires d'étudiants (id1, id2) :
{$studentsInGroupsJson}

---

Répondez uniquement avec un JSON strictement conforme à cette structure (sans aucun texte avant, après ou autour) :

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

🚨 Réponds uniquement avec ce JSON final. Pas de texte. Pas de commentaire. Pas de langage naturel. Juste le JSON.
";




        $responseText = $mistral->generateText($prompt);

        if (preg_match('/```json(.*?)```/s', $responseText, $matches)) {
            $jsonString = trim($matches[1]);
        } else {
            $jsonString = trim($responseText);
        }

        $decoded = json_decode($jsonString, true);

        if (json_last_error() === JSON_ERROR_NONE) {
            return view('pages.groups.promptResult', [
                'groups' => $decoded,
                'studentsInGroups' => $studentsInGroups,
                'project_name' => $request->project_name
            ]);
        } else {
            // Erreur de décodage JSON
            return response()->json([
                'error' => 'Erreur lors du décodage JSON : ' . json_last_error_msg(),
                'jsonString' => $jsonString
            ]);
        }

    }


    public function promptResult(){

        return view('pages.groups.promptResult');
    }
}
