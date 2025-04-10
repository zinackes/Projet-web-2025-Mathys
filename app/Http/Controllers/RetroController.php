<?php

namespace App\Http\Controllers;

use App\Models\Retros;
use App\Models\Cohort;
use App\Models\RetrosColumns;
use App\Models\RetrosColumnsCards;
use App\Models\UserCohort;
use App\Models\UserSchool;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class RetroController extends Controller
{
    /**
     * Show the list of retrospectives for the user's cohort.
     *
     * @return Factory|View|Application|object
     */
    public function index() {

        $userInSchool = UserSchool::where('user_id', auth()->user()->id)->first();


        if($userInSchool->role === "admin"){
            // Get all the retros for admin
            $retros = Retros::all();

            $cohorts = Cohort::all();
        }
        else if($userInSchool->role === "teacher"){
            // Get the retros made by the teacher
            $retros = Retros::where('user_id', auth()->user()->id)->get();

            $cohorts = Cohort::where('id', auth()->user()->cohort()->id)->get();
        }
        else{
            // Get the user's cohort ID
            $cohortId = UserCohort::where('user_id', auth()->user()->id)->first()->cohort_id;

            // Get retros for this cohort
            $retros = Retros::where('cohort_id', $cohortId)->get();

            $cohorts = 0;
        }


        // Load the user related to the retros
        $retros->load('user');

        // Return view with retros and cohort ID
        return view('pages.retros.index', [
            'retros' => $retros,
            'cohorts' => $cohorts,
        ]);
    }


    public function store(Request $request) {


        $request->validate([
            'name' => 'required|string',
            'cohort_id' => 'required|integer',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
        ]);

        $retro = Retros::create([
            'name' => $request['name'],
            'cohort_id' => $request['cohort_id'],
            'user_id' => auth()->user()->id,
            'description' => $request['description'],
            'start_date' => $request['start_date'],
            'end_date' => $request['end_date'],
        ]);

        return redirect()->back()->with('success', 'Retro added!');
    }


    public function column(Request $request) {

        $request->validate([
            'retro_id' => 'required|integer',
            'name' => 'required|string',
        ]);

        $column = RetrosColumns::create([
            'retro_id' => $request['retro_id'],
            'name' => $request['name'],
        ]);

        return response()->json($column, 201);
    }

    public function card(Request $request) {

        $request->validate([
            'retro_id' => 'required|integer',
            'column_id' => 'required|integer',
            'user_id' => 'required|integer',
            'name' => 'required|string',
        ]);

        $card = RetrosColumnsCards::create([
            'retro_id' => $request['retro_id'],
            'column_id' => $request['column_id'],
            'user_id' => $request['user_id'],
            'name' => $request['name'],
        ]);

        return response()->json($card, 201);
    }


    public function getBoard(){

    }

    /**
     * Show details for a specific cohort with its retrospectives.
     *
     * @param int $cohortId The cohort ID
     * @return Factory|View|Application|object
     */
    public function show($retroId, $cohortId) {

        $cohort = Cohort::with('retros')->find($cohortId);

        // Vérifie si le cohort et les rétros existent
        if ($cohort && $cohort->retros->isNotEmpty()) {
            // Filtre la rétrospective par son ID
            $retro = $cohort->retros->where('id', $retroId)->first();

            // Si la rétrospective est trouvée
            if ($retro) {
                $retro->load('columns'); // Charge les colonnes liées à cette rétrospective

                $response = [];

                // Vérifie si la rétrospective a des colonnes
                if ($retro->columns->isNotEmpty()) {
                    // Boucle sur les colonnes de la rétrospective
                    foreach ($retro->columns as $column) {
                        // Prépare les données pour chaque colonne
                        $columnData = [
                            'id' => 'column-id-' . $column->id,
                            'title' => $column->name,
                            'item' => [],
                        ];

                        // Ajoute les cartes de la colonne à la réponse
                        foreach ($column->cards as $card) {
                            $columnData['item'][] = [
                                'id' => 'item-id-' . $card->id,
                                'title' => $card->name,
                                'username' => $card->name
                            ];
                        }

                        // Ajoute la colonne à la réponse
                        $response[] = $columnData;
                    }
                }

                // Retourne la vue avec la rétrospective filtrée et les données des colonnes
                return response()->view('pages.retros.retro', [
                    'retro' => $response,
                    'TheRetro' => $retro,
                    'cohort' => $cohort,
                    'retroId' => $retroId,
                    'cohortId' => $cohortId,
                ]);
            }
        }

        // Si aucun résultat n'est trouvé
        return redirect()->back()->with('error', 'Retro not found!');
    }

}
