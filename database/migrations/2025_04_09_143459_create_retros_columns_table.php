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
        Schema::create('retros_columns', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('retro_id');
            $table->string('name');
            $table->timestamps();

            $table->foreign('retro_id')->references('id')->on('retros')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('retro_columns');
    }
};
