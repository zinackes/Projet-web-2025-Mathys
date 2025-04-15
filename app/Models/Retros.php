<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Retros extends Model
{
    protected $table = 'retros';

    /**
     * Retro can have only one cohort
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function cohort(){
        return $this->belongsTo('App\Models\Cohort');
    }

    /**
     * Retro can have multiples boards
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function columns(){
        return $this->hasMany('App\Models\RetrosColumns', 'retro_id');
    }

    /**
     * Retro can have multiple users
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(){
        return $this->belongsTo('App\Models\User');
    }

    protected $fillable = [
        'name',
        'cohort_id',
        'user_id',
        'description',
        'start_date',
        'end_date',
    ];

}
