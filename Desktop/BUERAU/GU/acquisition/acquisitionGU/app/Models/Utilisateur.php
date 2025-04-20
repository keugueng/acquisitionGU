<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utilisateur extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'mot_de_passe',
        'role' // (Admin, Agent, Client)
    ];

    public function dossiers()
    {
        return $this->hasMany(Dossier::class);
    }
}
