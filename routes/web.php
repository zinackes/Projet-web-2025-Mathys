<?php

use App\Http\Controllers\CohortController;
use App\Http\Controllers\CommonLifeController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GithubController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RetroController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\KnowledgeController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\TeacherController;
use App\Services\GeminiService;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RetroColumnController;
use Illuminate\Support\Facades\Broadcast;


// Redirect the root path to /dashboard
Route::redirect('/', 'dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware('verified')->group(function () {
        // Dashboard
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        // Cohorts
        Route::get('/cohorts', [CohortController::class, 'index'])->name('cohort.index');
        Route::get('/cohort/{cohort}', [CohortController::class, 'show'])->name('cohort.show');
        Route::post('/cohorts/update', [CohortController::class, 'update'])->name('cohorts.update');

        // Teachers
        Route::get('/teachers', [TeacherController::class, 'index'])->name('teacher.index');

        // Students
        Route::get('students', [StudentController::class, 'index'])->name('student.index');

        // Knowledge
        Route::get('knowledge', [KnowledgeController::class, 'index'])->name('knowledge.index');

        // Groups
        Route::get('groups', [GroupController::class, 'index'])->name('group.index');
        Route::post('groups/generate', [GroupController::class, 'generate'])->name('group.generate');
        Route::post('groups', [GroupController::class, 'store'])->name('group.store');
        Route::get('/group/show/{project_name}', [GroupController::class, 'show'])->name('group.show');
        Route::get('/group/{group_name}/dashboard', [GroupController::class, 'dashboard'])->name('group.dashboard');
        Route::post('group/updateGithub', [GroupController::class, 'updateGithub'])->name('group.updateGithub');

        Route::get('/api/group-info/{id}', [GroupController::class, 'getInfo'])->name('group.info');

        Route::get('/api/github-img/{owner}/{repo}', [GithubController::class, 'showPreviewImage'])->name('github.showPreviewImage');
        Route::get('/api/github-languages/{owner}/{repo}', [GithubController::class, 'showLanguages'])->name('github.showLanguages');
        Route::get('/api/github-contributors/{owner}/{repo}', [GithubController::class, 'showContributors'])->name('github.showContributors');
        Route::get('/api/github-repo/{owner}/{repo}', [GithubController::class, 'showRepo'])->name('github.showRepo');
        Route::get('/api/github-branches/{owner}/{repo}', [GithubController::class, 'showBranches'])->name('github.showBranches');


        // Retro
        route::get('retros', [RetroController::class, 'index'])->name('retro.index');
        Route::get('/retro/', [RetroController::class, 'show'])->name('retro.show');
        Route::post('/retro/create', [RetroController::class, 'store'])->name('retro.store');

        // Retro column
        Route::delete('/retro/column/delete/{id}', [RetroColumnController::class, 'delete'])->name('retroColumn.deleteCard');
        Route::post('/retro/column', [RetroColumnController::class, 'store'])->name('retroColumn.store');

        // Retro Card
        Route::post('/retro/card', [RetroController::class, 'card'])->name('retro.card');
        Route::put('/retro/card/update/{id}', [RetroController::class, 'updateCard'])->name('retro.updateCard');
        Route::put('/retro/card/update/name/{id}', [RetroController::class, 'updateCard'])->name('retro.updateCardName');

        // Common life
        Route::get('common-life', [CommonLifeController::class, 'index'])->name('common-life.index');


        Route::get('/retro/fetchdata/{cohortId}/{retroId}', [RetroController::class, 'fetchdata'])->name('retro.fetchdata');


        Route::get('/prompt-result', [GroupController::class, 'promptResult'])->name('prompt.result');
    });

});

Broadcast::channel('Retro-Channel', function ($user) {
    return true;
});

Route::get('/mistral-test', function (GeminiService $mistral) {
    $prompt = "Explique moi le Big Bang simplement.";
    $result = $mistral->generateText($prompt);
    return nl2br(e($result));
});

require __DIR__.'/auth.php';
