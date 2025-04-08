<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserSchool extends Model
{
    protected $table        = 'users_schools';

    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    public function school(){
        return $this->belongsTo('App\Models\School');
    }

    protected $fillable     = ['user_id', 'school_id', 'role', 'active'];
}
