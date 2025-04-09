<?php

namespace App\Http\Controllers;

use App\Models\Retros;
use App\Models\Cohort;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class RetroController extends Controller
{
    /**
     * Display the page
     *
     * @return Factory|View|Application|object
     */
    public function index() {

        $cohort = Cohort::with('retros.columns.cards')->find(1);

        $response = [
        ];

        foreach ($cohort->retros as $retro) {
            foreach ($retro->columns as $column) {
                // Ajouter la colonne comme un "item"
                $columnData = [
                    'id' => 'column-id-' . $column->id,
                    'title' => $column->name, // Ici, c'est la colonne qui est le titre
                    'item' => []  // Un tableau pour les cartes sous cette colonne
                ];

                // Ajouter les cartes dans la section "item" de la colonne
                foreach ($column->cards as $card) {
                    $columnData['item'][] = [
                        'id' => 'item-id-' . $card->id,
                        'title' => $card->name, // Le titre de la carte
                        'username' => $card->name  // Utiliser le nom de la carte comme username
                    ];
                }

                // Ajouter la colonne avec ses cartes dans la réponse principale
                $response[] = $columnData;
            }
        }


        return response()->json($response);
    }
}
