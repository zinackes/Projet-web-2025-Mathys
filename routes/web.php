<?php

use App\Http\Controllers\CohortController;
use App\Http\Controllers\CommonLifeController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RetroController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\KnowledgeController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\TeacherController;
use App\Services\GeminiService;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RetroColumnController;


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

        // Retro
        route::get('retros', [RetroController::class, 'index'])->name('retro.index');
        Route::get('/retro/{cohortId}/{retroId}', [RetroController::class, 'show'])->name('retro.show');
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



        Route::get('/prompt-result', [GroupController::class, 'promptResult'])->name('prompt.result');
    });

});

Route::get('/mistral-test', function (GeminiService $mistral) {
    $prompt = "Explique moi le Big Bang simplement.";
    $result = $mistral->generateText($prompt);
    return nl2br(e($result));
});

require __DIR__.'/auth.php';
