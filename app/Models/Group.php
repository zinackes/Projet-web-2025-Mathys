<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $table = 'groups';

    public function users(){
        return $this->belongsToMany('App\Models\User');
    }

    public function cohort(){
        return $this->belongsTo('App\Models\Cohort');
    }
    protected $fillable = [
        'user_id',
        'cohort_id',
        'group_name',
        'project_name',
        'description',
        'start_date',
        'end_date',
    ];
}
