<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pret extends Model
{
    use HasFactory;

    protected $fillable = [
        'dossier_id',
        'montant_pret',
        'taux_interet',
        'duree_remboursement',
        'date_demande',
        'statut' // (En cours, Approuvé, Refusé)
    ];

    public function dossier()
    {
        return $this->belongsTo(Dossier::class);
    }
}
