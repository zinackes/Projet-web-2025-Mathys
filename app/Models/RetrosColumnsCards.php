<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RetrosColumnsCards extends Model
{
    protected $table = 'retros_columns_cards';

    public function retros_columns(){
        return $this->belongsTo(RetrosColumns::class);
    }


}
