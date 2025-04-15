<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cohort extends Model
{
    protected $table = 'cohorts';
    protected $fillable = ['school_id', 'name', 'description', 'start_date', 'end_date'];

    /**
     * A cohort can have multiple retros
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function retros(){
        return $this->hasMany('App\Models\Retros');
}
}
