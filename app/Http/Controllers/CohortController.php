<?php

namespace App\Http\Controllers;

use App\Models\Cohort;
use App\Models\UserCohort;
use App\Models\UserSchool;
use App\Events\CohortUpdated;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class CohortController extends Controller
{
    /**
     * Display all available cohorts
     * @return Factory|View|Application|object
     */
    public function index() {

        $cohorts = Cohort::all();

        $usersInSchools = UserSchool::all();

        return view('pages.cohorts.index', [
            'cohorts' => $cohorts,
            'usersInSchools' => $usersInSchools
        ]);
    }


    /**
     * Display a specific cohort
     * @param Cohort $cohort
     * @return Application|Factory|object|View
     */
    public function show(Cohort $cohort) {

        $usersInCohort = UserCohort::where('cohort_id', $cohort->id)->get();


        return view('pages.cohorts.show', [
            'cohort' => $cohort,
            'usersInCohort' => $usersInCohort
        ]);
    }

    public function update(Request $request)
    {
        // Trouver le cohort ou échouer
        $cohort = Cohort::findOrFail(1);

        // Mise à jour du cohort
        $cohort->update([
            'name' => $request->name
        ]);

        // Diffuser l'événement avec les données mises à jour
        event(new CohortUpdated($cohort));

        // Retourner une réponse JSON
        return response()->json([
            'success' => true,
            'cohort' => $cohort
        ]);
    }


}
