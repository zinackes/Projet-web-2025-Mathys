<?php

namespace App\Http\Controllers;

use App\Events\CardCreate;
use App\Events\CardDelete;
use App\Events\CardMove;
use App\Events\RetroUpdated;
use App\Models\RetrosColumns;
use App\Models\RetrosColumnsCards;
use App\Policies\RetroColCardPolicy;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;

class RetroColumnCardController extends Controller
{

    use AuthorizesRequests;

    /**
     * Store a card in BDD and send event to pusher
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request) {

        $request->validate([
            'retro_id' => 'required|integer',
            'column_id' => 'required|integer',
            'user_id' => 'required|integer',
            'name' => 'required|string',
        ]);

        $card = RetrosColumnsCards::create([
            'retro_id' => $request['retro_id'],
            'column_id' => $request['column_id'],
            'user_id' => $request['user_id'],
            'name' => $request['name'],
        ]);

        broadcast(new CardCreate($card))->toOthers();

        return response()->json($card, 201);
    }

    /**
     * update only name of card or his name and board and send event to pusher
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function update(Request $request, $id) {


        $card = RetrosColumnsCards::findOrFail($id);

        if($request['column_id']){

            $this->authorize('move', $card);

            $request->validate([
                'column_id' => 'required|integer',
                'name' => 'required|string',
            ]);


            $update = $card->update([
                'column_id' => $request['column_id'],
                'name' => $request['name'],
            ]);

            broadcast(new CardMove($card))->toOthers();
        }
        else if (!$request['column_id']){

            $this->authorize('update', $card);

            $request->validate([
                'name' => 'required|string',
            ]);


            $update = $card->update([
                'name' => $request['name'],
            ]);

            event(new RetroUpdated($card));
        }


        return response()->json(['message' => 'Column updated successfully', 'column' => $card]);
    }

    public function delete($id) {


        $card = RetrosColumnsCards::findOrFail($id);
        $this->authorize('delete', $card);


        $cardData = [
            'id' => $card->id,
            'name' => $card->name,
            'retro_id' => $card->retro_id,
        ];

        broadcast(new CardDelete($cardData))->toOthers();
        $card->delete();

        return response()->json(['message' => 'Carte supprimée avec succès.'], 201);
    }
}
