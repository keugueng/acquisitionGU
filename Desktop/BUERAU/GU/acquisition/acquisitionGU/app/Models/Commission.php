<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commission extends Model
{
    use HasFactory;

    protected $fillable = [
        'dossier_id',
        'montant_commission',
        'date_commission',
        'statut' // (En attente, Payée, Non payée)
    ];

    public function dossier()
    {
        return $this->belongsTo(Dossier::class);
    }
}
