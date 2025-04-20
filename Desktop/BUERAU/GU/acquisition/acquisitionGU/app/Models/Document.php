<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    protected $fillable = [
        'dossier_id',
        'nom_document',
        'chemin_fichier',
        'type_document' // (Identité, Justificatif, etc.)
    ];

    public function dossier()
    {
        return $this->belongsTo(Dossier::class);
    }
}
