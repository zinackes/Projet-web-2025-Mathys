<?php

namespace App\Http\Controllers;

use App\Models\Cohort;
use App\Models\UserSchool;
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

        $cohors = Cohort::all();

        $usersInSchools = UserSchool::all();

        return view('pages.cohorts.index', [
            'cohors' => $cohors,
            'usersInSchools' => $usersInSchools
        ]);
    }


    /**
     * Display a specific cohort
     * @param Cohort $cohort
     * @return Application|Factory|object|View
     */
    public function show(Cohort $cohort) {

        return view('pages.cohorts.show', [
            'cohort' => $cohort
        ]);
    }
}
