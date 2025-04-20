<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visite extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'date_visite',
        'logement_visité',
        'observations',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
