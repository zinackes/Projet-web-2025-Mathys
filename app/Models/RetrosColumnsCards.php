<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RetrosColumnsCards extends Model
{
    protected $table = 'retros_columns_cards';

    public function retros_columns(){
        return $this->belongsTo(RetrosColumns::class);
    }

    protected $fillable = [
        'retro_id',
        'column_id',
        'user_id',
        'name'
    ];

    public function card(){
        return $this->belongsToMany(Retros::class, 'retros')
            ->withPivot('user_id')
            ->get();
    }


}
