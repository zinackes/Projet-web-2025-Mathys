<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $table = 'groups';

    protected $fillable = [
        'user_id',
        'group_name',
        'project_name',
        'description',
        'start_date',
        'end_date',
    ];
}
