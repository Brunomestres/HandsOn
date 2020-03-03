<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Onda extends Model
{
    protected $fillable =['id_baterias','id_surfistas','surfista'];

    function nota()
    {
        return $this->hasOne('App\Nota','id_onda');
    }
}
