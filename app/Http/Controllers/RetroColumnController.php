<?php

namespace App\Http\Controllers;

use App\Events\BoardCreate;
use App\Events\ColumnDelete;
use App\Models\Retros;
use App\Models\RetrosColumns;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class RetroColumnController extends Controller
{

    use AuthorizesRequests;

    /**
     * Store in BDD the board for a retro and send event to pusher
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request){

        $request->validate([
            'retro_id' => 'required|integer',
            'name' => 'required|string',
        ]);

        $column = RetrosColumns::create([
            'retro_id' => $request['retro_id'],
            'name' => $request['name'],
        ]);

        // send event to pusher
        broadcast(new BoardCreate($column))->toOthers();

        return response()->json($column, 201);
    }

    /**
     * Delete a board from BDD and send event to pusher
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function delete($id) {

        $this->authorize('delete', RetrosColumns::class);


        $column = RetrosColumns::findOrFail($id);

        $columnData = [
            'id' => $column->id,
            'name' => $column->name,
            'retro_id' => $column->retro_id,
        ];

        broadcast(new ColumnDelete($columnData))->toOthers();
        $column->delete();

        return response()->json(['message' => 'Colonne supprimée avec succès.'], 201);
    }
}
