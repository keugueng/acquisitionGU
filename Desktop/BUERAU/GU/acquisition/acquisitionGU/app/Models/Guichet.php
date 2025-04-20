<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guichet extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'adresse',
        'responsable_id' // Référence à Utilisateur
    ];

    public function responsable()
    {
        return $this->belongsTo(Utilisateur::class, 'responsable_id');
    }

    public function dossiers()
    {
        return $this->hasMany(Dossier::class);
    }
}
