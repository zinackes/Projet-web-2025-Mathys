<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserCohort extends Model
{
    protected $table = 'users_cohorts';

    public function user(){
        return $this->belongsTo('App\Models\User');
    }
}
