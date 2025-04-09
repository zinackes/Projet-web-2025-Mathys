<?php

namespace App\Http\Controllers;

use App\Models\Retros;
use App\Models\Cohort;
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
        }
        else if($userInSchool->role === "teacher"){
            // Get the retros made by the teacher
            $retros = Retros::where('user_id', auth()->user()->id);
        }
        else{
            // Get the user's cohort ID
            $cohortId = UserCohort::where('user_id', auth()->user()->id)->first()->cohort_id;

            // Get retros for this cohort
            $retros = Retros::where('cohort_id', $cohortId)->get();
        }


        // Load the user related to the retros
        $retros->load('user');

        // Return view with retros and cohort ID
        return view('pages.retros.index', [
            'retros' => $retros,
        ]);
    }

    /**
     * Show details for a specific cohort with its retrospectives.
     *
     * @param int $cohortId The cohort ID
     * @return Factory|View|Application|object
     */
    public function show($cohortId) {

        // Get the cohort with its retros, columns, and cards
        $cohort = Cohort::with('retros.columns.cards')->find($cohortId);

        // Create an empty array to store the response
        $response = [];

        foreach ($cohort->retros as $retro) {

            foreach ($retro->columns as $column) {
                // Add the column as an item
                $columnData = [
                    'id' => 'column-id-' . $column->id,
                    'title' => $column->name,
                    'item' => []
                ];

                foreach ($column->cards as $card) {
                    // Add card to the item list
                    $columnData['item'][] = [
                        'id' => 'item-id-' . $card->id,
                        'title' => $card->name,
                        'username' => $card->name
                    ];
                }

                // Add column data with cards to the response
                $response[] = $columnData;
            }
        }

        // Return view with retro data
        return response()->view('pages.retros.retro', [
            'retro' => $response,
        ]);
    }
}
