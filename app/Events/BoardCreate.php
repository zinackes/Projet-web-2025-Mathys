<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\Retros;

class BoardCreate implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    public $board;
    /**
     * Create a new event instance.
     */
    public function __construct($board)
    {
        $this->board = $board;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('Retro-Channel')
        ];
    }

    /**
     * @return string
     */
    public function broadcastAs() {
        return 'Board.Create';
    }

    public function broadcastWith(): array{
        return [
            'board' => $this->board
        ];
    }

    public function broadcastVia(){
        return ['sync'];
    }
}
