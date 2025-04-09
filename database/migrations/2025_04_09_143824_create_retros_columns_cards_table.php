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
        Schema::create('retros_columns_cards', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('retro_id');
            $table->foreign('retro_id')->references('id')->on('retros')
                ->onDelete('cascade');

            $table->unsignedBigInteger('column_id');
            $table->foreign('column_id')->references('id')->on('retros_columns')
                ->onDelete('cascade');

            $table->string('name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('retros_columns_cards');
    }
};
