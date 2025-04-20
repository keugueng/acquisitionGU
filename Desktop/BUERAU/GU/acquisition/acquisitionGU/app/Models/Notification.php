<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $fillable = [
        'dossier_id',
        'type_notification', // (Attribution, Refus, Autre)
        'message',
        'date_envoi'
    ];

    public function dossier()
    {
        return $this->belongsTo(Dossier::class);
    }
}
