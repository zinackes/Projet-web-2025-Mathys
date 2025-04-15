<?php

namespace App\Http\Controllers;

use App\Models\Cohort;
use App\Models\User;
use App\Models\UserCohort;
use App\Models\UserGroup;
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

        $studentsInCohort = UserCohort::where('cohort_id', $cohort->id)->get();
        $studentIds = $studentsInCohort->pluck('user_id');

        // Get the students (excluding admin and teacher role)
        $students = User::whereIn('id', $studentIds)
            ->get()
            ->filter(fn($u) => optional($u->school())->pivot->role === 'student' || is_null(optional($u->school())->pivot->role));


        return view('pages.cohorts.show', [
            'cohort' => $cohort,
            'usersInCohort' => $students
        ]);
    }


}
