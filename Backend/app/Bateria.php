<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bateria extends Model
{
    


    public function surfistas()
    {
        return $this->belongsToMany('App\Surfista','surfistas_baterias','id_bateria','id_surfista');
    }
}
