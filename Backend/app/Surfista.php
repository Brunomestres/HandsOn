<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Surfista extends Model
{
    protected $fillable = [
        'nome', 'pais', 'id_baterias',
    ];
}
