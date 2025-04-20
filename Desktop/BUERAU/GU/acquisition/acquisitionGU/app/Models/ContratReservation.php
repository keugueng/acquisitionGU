<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContratReservation extends Model
{
    use HasFactory;

    protected $fillable = [
        'dossier_id',
        'logement_id',
        'date_signature',
        'statut' // (En attente, Signé, Annulé)
    ];

    public function dossier()
    {
        return $this->belongsTo(Dossier::class);
    }

    public function logement()
    {
        return $this->belongsTo(Logement::class);
    }
}
