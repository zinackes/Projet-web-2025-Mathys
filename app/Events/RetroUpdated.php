<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\Retros;

class RetroUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;


    public $retro;


    /**
     * Create a new event instance.
     */
    public function __construct($retro)
    {
        $this->retro = $retro;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('retro.' . $this->retro->retro_id),
        ];
    }

    /**
     * @return string
     */
    public function broadcastAs() {
        return 'Retro.Updated';
    }

    public function broadcastWith(): array{
        return [
            'retro' => $this->retro
        ];
    }

    public function broadcastVia(){
        return ['sync'];
    }
}
