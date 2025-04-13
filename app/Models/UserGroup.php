<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserGroup extends Model
{
    protected $table = 'users_groups';

    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    protected $fillable = [
        'user_id',
        'group_id',
        'role',
    ];
}
