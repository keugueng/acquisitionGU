<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dossier extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'guichet_id',
        'logement_id',
        'statut' // (En cours, Complété, Annulé)
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function guichet()
    {
        return $this->belongsTo(Guichet::class);
    }

    public function logement()
    {
        return $this->belongsTo(Logement::class);
    }

    public function documents()
    {
        return $this->hasMany(Document::class);
    }

    public function paiements()
    {
        return $this->hasMany(Paiement::class);
    }

    public function pret()
    {
        return $this->hasOne(Pret::class);
    }

    public function commissions()
    {
        return $this->hasMany(Commission::class);
    }
}
