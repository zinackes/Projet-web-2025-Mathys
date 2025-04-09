<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('retros', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('cohort_id');
            $table->unsignedBigInteger('user_id'); // Id Of the creator of the retro
            $table->string('description');
            $table->dateTime('start_date'); // Date of beginning (people won't have access to it until that time)
            $table->dateTime('end_date'); // Date of end (People won't be able to modify it afterward)
            $table->timestamps();

            $table->foreign('cohort_id')->references('id')->on('cohorts')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('retro');
    }
};
