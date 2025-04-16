<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class CardMove implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $card;

    /**
     * Create a new event instance.
     */
    public function __construct($card)
    {
        $this->card = $card;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('retro.' . $this->card->retro_id),
        ];
    }

    /**
     * @return string
     */
    public function broadcastAs() {
        return 'Card.Move';
    }

    public function broadcastWith(): array{
        return [
            'card' => $this->card
        ];
    }

    public function broadcastVia(){
        return ['sync'];
    }
}
