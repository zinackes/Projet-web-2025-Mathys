<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Retros extends Model
{
    protected $table = 'retros';

    public function cohort(){
        return $this->belongsTo('App\Models\Cohort');
    }

    public function columns(){
        return $this->hasMany('App\Models\RetrosColumns', 'retro_id');
    }

    public function user(){
        return $this->belongsTo('App\Models\User');
    }
}
