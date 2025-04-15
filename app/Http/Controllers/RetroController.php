<?php

namespace App\Http\Controllers;

use App\Events\CardCreate;
use App\Events\CardMove;
use App\Events\RetroUpdated;
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
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class RetroController extends Controller
{

    use AuthorizesRequests;
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
            $cohortId = UserCohort::where('user_id', auth()->user()->id)->first();

            // Get retros for this cohort
            $retros = Retros::where('cohort_id', $cohortId->cohort_id)->get();

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

    /**
     * Store a retro in BDD, also check if user can create one
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function store(Request $request) {

        $this->authorize('create', Retros::class);

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

    /**
     * Store a card in BDD and send event to pusher
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
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

        event(new CardCreate($card));

        return response()->json($card, 201);
    }

    /**
     * update only name of card or his name and board and send event to pusher
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function updateCard(Request $request, $id) {


        $card = RetrosColumnsCards::findOrFail($id);

        if($request['column_id']){

            $this->authorize('move', $card);

            $request->validate([
                'column_id' => 'required|integer',
                'name' => 'required|string',
            ]);


            $update = $card->update([
                'column_id' => $request['column_id'],
                'name' => $request['name'],
            ]);

            event(new CardMove($card));
        }
        else if (!$request['column_id']){

            $this->authorize('update', $card);

            $request->validate([
                'name' => 'required|string',
            ]);


            $update = $card->update([
                'name' => $request['name'],
            ]);

            event(new RetroUpdated($card));
        }


        return response()->json(['message' => 'Column updated successfully', 'column' => $card]);
    }

    /**
     * user in ajax to get data from the retro (boards and cards)
     * @param $cohortId
     * @param $retroId
     * @return \Illuminate\Http\JsonResponse
     */
    public function fetchdata($cohortId, $retroId) {
        $cohort = Cohort::with('retros')->find($cohortId);

        $userId = auth()->user()->id;

        if ($cohort && $cohort->retros->isNotEmpty()) {
            // get the retro;
            $retro = $cohort->retros->where('id', $retroId)->first();

            if ($retro) {
                $retro->load('columns');
                $response = [];

                // fill the response array with the right structure
                if ($retro->columns->isNotEmpty()) {
                    foreach ($retro->columns as $column) {
                        $columnData = [
                            'id' => 'column-id-' . $column->id,
                            'title' => $column->name,
                            'item' => [],
                        ];

                        foreach ($column->cards as $card) {
                            $columnData['item'][] = [
                                'id' => 'item-id-' . $card->id,
                                'title' => $card->name,
                                'username' => $card->name
                            ];
                        }

                        $response[] = $columnData;
                    }
                }

                return response()->json([
                    'response' => $response,
                    'cohortId' => $cohortId,
                    'userId' => $userId,
                ]);
            }
        }

        return response()->json(['message' => 'Retro ou Cohort non trouvé'], 404);
    }



    /**
     * Show details for a specific cohort with its retrospectives.
     *
     * @param int $cohortId The cohort ID
     * @return Factory|View|Application|object
     */
    public function show(Request $request) {

        $cohortId = $request->query('cohortId');
        $retroId = $request->query('retroId');

        $cohort = Cohort::with('retros')->find($cohortId);


        // Verify if a retro exist in a cohort
        if ($cohort && $cohort->retros->isNotEmpty()) {
            $retro = $cohort->retros->where('id', $retroId)->first();

            if ($retro) {
                // get the boars from retro
                $retro->load('columns');

                $response = [];

                if ($retro->columns->isNotEmpty()) {

                    // fill the response array with boards and cards with the right structure
                    foreach ($retro->columns as $column) {
                        $columnData = [
                            'id' => 'column-id-' . $column->id,
                            'title' => $column->name,
                            'item' => [],
                        ];

                        foreach ($column->cards as $card) {
                            $columnData['item'][] = [
                                'id' => 'item-id-' . $card->id,
                                'title' => $card->name,
                                'username' => $card->name
                            ];
                        }

                        $response[] = $columnData;
                    }
                }


                return response()->view('pages.retros.retro', [
                    'retro' => $response,
                    'TheRetro' => $retro,
                    'cohort' => $cohort,
                    'retroId' => $retroId,
                    'cohortId' => $cohortId,
                    'pusherAppKey' => env('PUSHER_APP_KEY'),
                    'pusherAppCluster' => env('PUSHER_APP_CLUSTER'),
                ]);
            }
        }

        return redirect()->back()->with('error', 'Retro not found!');
    }

}
