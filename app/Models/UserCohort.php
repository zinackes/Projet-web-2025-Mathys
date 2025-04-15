<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserCohort extends Model
{
    protected $table = 'users_cohorts';

    /**
     * A user in cohort can only have on user
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(){
        return $this->belongsTo('App\Models\User');
    }
}
