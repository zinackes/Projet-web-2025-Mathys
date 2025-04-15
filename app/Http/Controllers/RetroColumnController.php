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

    public function store(Request $request){

        $request->validate([
            'retro_id' => 'required|integer',
            'name' => 'required|string',
        ]);

        $column = RetrosColumns::create([
            'retro_id' => $request['retro_id'],
            'name' => $request['name'],
        ]);

        event(new BoardCreate($column));

        return response()->json($column, 201);
    }


    public function delete($id) {

        $this->authorize('delete', RetrosColumns::class);


        $column = RetrosColumns::findOrFail($id);

        $columnData = [
            'id' => $column->id,
            'name' => $column->name,
            'retro_id' => $column->retro_id,
        ];

        event(new ColumnDelete($columnData));
        $column->delete();

        return response()->json(['message' => 'Colonne supprimée avec succès.'], 200);
    }
}
