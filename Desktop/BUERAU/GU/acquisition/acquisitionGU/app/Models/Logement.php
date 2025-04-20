<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logement extends Model
{
    use HasFactory;

    protected $fillable = [
        'adresse',
        'superficie',
        'prix',
        'type_logement', // (Appartement, Maison, etc.)
        'status' // (Disponible, Réservé, Vendue)
    ];

    public function dossiers()
    {
        return $this->hasMany(Dossier::class);
    }

    public function contrats()
    {
        return $this->hasMany(ContratReservation::class);
    }

    public function actesVente()
    {
        return $this->hasMany(ActeVente::class);
    }
}
