<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RetrosColumns extends Model
{
    protected $table = 'retros_columns';

    /**
     * A board can have only one retro
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function retros(){
        return $this->belongsTo('App\Models\Retros', 'retro_id');
    }

    /**
     * A board can have multiple cards
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function cards(){
        return $this->hasMany('App\Models\RetrosColumnsCards', 'column_id');
    }

    protected $fillable = [
        'retro_id',
        'name'
    ];
}
