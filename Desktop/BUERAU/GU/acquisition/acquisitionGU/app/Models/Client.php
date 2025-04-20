<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;


    protected $fillable = [
        'nom',
        'prenom',
        'email',
        'telephone',
        'adresse',
        'date_naissance',
        'profession',
        'employeur',
        'matricule',
        'ville_origine',
        'situation_familiale',
        'numero_carte_passport',
        'numero_compte',
        'banque',
        'solvable',
        'nom_conjoint',
        'prenom_conjoint',
        'ville_origine_conjoint',
        'date_naissance_conjoint',
        'profession_conjoint',
        'matricule_conjoint',
        'employeur_conjoint',
        'numero_carte__conjoint',
        'numero_compte_conjoint',
        'banque_conjoint',
        'salaire',
        'salaire_conjoint',
        'autre_revenu'
    ];

    public function dossiers()
    {
        return $this->hasMany(Dossier::class);
    }

    public function visites()
    {
        return $this->hasMany(Visite::class);
    }

    public function enfant()
    {
        return $this->hasMany(Enfant::class);
    }
}
