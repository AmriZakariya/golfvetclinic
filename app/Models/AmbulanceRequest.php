<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AmbulanceRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'animal_type',
        'symptoms',
        'location_text',
        'phone',
        'is_emergency',
        'status',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'is_emergency' => 'boolean',
        ];
    }
}

