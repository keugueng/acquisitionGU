<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paiement extends Model
{
    use HasFactory;

    protected $fillable = [
        'dossier_id',
        'montant',
        'date_paiement',
        'mode_paiement' // (Espèces, Chèque, Virement)
    ];

    public function dossier()
    {
        return $this->belongsTo(Dossier::class);
    }
}
