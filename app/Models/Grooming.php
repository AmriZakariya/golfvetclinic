<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grooming extends Model
{
    protected $fillable = [
        'owner_name',
        'phone',
        'animal_type',
        'animal_other_name',
        'animal_age',
        'breed',
        'weight_kg',
        'service_type',
        'preferred_date',
        'status',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'weight_kg' => 'decimal:2',
            'preferred_date' => 'date',
        ];
    }
}
