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
        Schema::create('groups', function (Blueprint $table) {
            $table->id();
            $table->UnsignedBigInteger('user_id'); // Use who created the groups
            $table->UnsignedBigInteger('cohort_id'); // Cohort which the group is from
            $table->string('group_name');
            $table->string('project_name');
            $table->string('description');
            $table->datetime('start_date');
            $table->datetime('end_date');
            $table->string('github_link')->nullable();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')
                ->onDelete('cascade');
            $table->foreign('cohort_id')->references('id')->on('cohorts')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('groups');
    }
};
