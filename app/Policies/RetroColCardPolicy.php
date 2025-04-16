<?php

namespace App\Policies;

use App\Models\Cohort;
use App\Models\RetrosColumns;
use App\Models\RetrosColumnsCards;
use App\Models\User;

class RetroColCardPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, RetrosColumnsCards $retrosColumnsCards): bool
    {
        return $user->id === $retrosColumnsCards->retro_id || in_array($user->school()->pivot->role, ['admin', 'teacher']);
    }

    /**
     * Determine whether the user can move the card.
     * @param User $user
     * @return bool
     */
    public function move(User $user): bool{
        return true;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, RetrosColumnsCards $retrosColumnsCards): bool
    {
        return $user->id === $retrosColumnsCards->retro_id || in_array($user->school()->pivot->role, ['admin', 'teacher']);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Cohort $cohort): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Cohort $cohort): bool
    {
        return false;
    }
}
