<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RetrosColumns extends Model
{
    protected $table = 'retros_columns';

    public function retros(){
        return $this->belongsTo('App\Models\Retros', 'retro_id');
    }

    public function cards(){
        return $this->hasMany('App\Models\RetrosColumnsCards', 'column_id');
    }
}
