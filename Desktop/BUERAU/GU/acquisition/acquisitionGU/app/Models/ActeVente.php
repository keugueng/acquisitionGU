<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActeVente extends Model
{
    use HasFactory;

    protected $fillable = [
        'contrat_reservation_id',
        'logement_id',
        'date_acte',
        'notaire',
        'type_acte' // (Vente, Donation)
    ];

    public function contratReservation()
    {
        return $this->belongsTo(ContratReservation::class);
    }

    public function logement()
    {
        return $this->belongsTo(Logement::class);
    }
}
