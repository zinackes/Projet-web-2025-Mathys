<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserCohort;
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
        $studentsJson = json_encode($students->toArray(), JSON_PRETTY_PRINT);

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
            if($request->numberGroup >= $maxGroupPossible){
                $rules['numberGroup'] .= "|max:{$maxGroupPossible}";
                $messages['numberGroup.max'] = "Le nombre de groupes ne peut pas être supérieur au ratio d'étudiants ({$maxGroupPossible}).";
            }
        }
        else{
            $rules['numberGroup'] .= "|max:0";
            $messages['numberGroup.max'] = "Il est nécessaire d'avoir un nombres d'eleves par groupes.";
        }




        $request->validate($rules, $messages);




        $prompt = "Voici la liste des étudiants : " . $studentsJson . ". Je veux créer " .
            $request->numberGroup . " groupes de " . $request->numberUsersInGroups . ". Pour cela, fais-moi des groupes où les
             personnes ont des grades le plus équivalents possible, chaque personne peut avoir seulement 1 seul group attribué,
             si il y a une personne seul alors il faudra la placer dans un group ou son grade est le plus represensatif.
             Je veux que tu me donnes uniquement un JSON avec toutes les informations que je t'ai données, en suivant ce modèle de
              structure :\n\n" .
            '[
      {
        "group_id": 0,
        "students": [
          {
            "id": 10,
            "first_name": "Frank",
            "last_name": "Moore",
            "email": "frank.moore@codingfactory.com",
            "grade": 7
          },
          {
            "id": 11,
            "first_name": "Alice",
            "last_name": "Brown",
            "email": "alice.brown@codingfactory.com",
            "grade": 7
          }
        ]
      },
      {
        "group_id": 1,
        "students": [
          {
            "id": 12,
            "first_name": "John",
            "last_name": "Doe",
            "email": "john.doe@codingfactory.com",
            "grade": 8
          },
          {
            "id": 13,
            "first_name": "Jane",
            "last_name": "Smith",
            "email": "jane.smith@codingfactory.com",
            "grade": 8
          }
        ]
      }
    ]';

        // Générer la réponse avec le service Mistral
        $responseText = $mistral->generateText($prompt);

        // Extraire le JSON de la réponse
        if (preg_match('/```json(.*?)```/s', $responseText, $matches)) {
            // Extraire le contenu JSON en supprimant les espaces blancs
            $jsonString = trim($matches[1]);
        } else {
            return response()->json(['error' => 'Aucun JSON valide trouvé dans la réponse.']);
        }

        // Vérifier si le JSON est valide
        $decoded = json_decode($jsonString, true);

        // Si le JSON est valide, on l'affiche dans la vue
        if (json_last_error() === JSON_ERROR_NONE) {
            return view('pages.groups.promptResult', [
                'groups' => $decoded
            ]);
        } else {
            // Retourner l'erreur de décodage JSON
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
