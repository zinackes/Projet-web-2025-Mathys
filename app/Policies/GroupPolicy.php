<?php

namespace App\Policies;

use App\Models\Cohort;
use App\Models\Group;
use App\Models\User;
use App\Models\UserGroup;

class GroupPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Group $group): bool
    {
        // User must be in the same cohort, or admin or teacher
        return $user->cohort()->pivot->cohort_id === $group->cohort_id || in_array($user->school()->pivot->role, ['admin', 'teacher']);
    }

    public function viewDashboard(User $user, Group $group): bool{
        $userGroups = UserGroup::where('group_id', $group->id)->get();
        // User must be in the group, or be admin or teacher
        return $userGroups->contains('user_id', $user->id) || in_array($user->school()->pivot->role, ['admin', 'teacher']);
    }

    public function create(User $user): bool{
        return in_array($user->school()->pivot->role, ['admin', 'teacher']);
    }

    public function update(User $user, Group $group): bool{
        $userGroups = UserGroup::where('group_id', $group->id)->get();

        return $userGroups->contains('user_id', $user->id) || in_array($user->school()->pivot->role, ['admin', 'teacher']);
    }
}
