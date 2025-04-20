<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enfant extends Model
{
    use HasFactory;


    protected $fillable = [
        'client_id',
        'nom',
        'prenom',
        'sexe',
        'date_naissance',
        'niveau_profession'
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
