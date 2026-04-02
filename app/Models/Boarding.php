<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Boarding extends Model
{
    protected $fillable = [
        'owner_name',
        'phone',
        'animal_type',
        'animal_other_name',
        'animal_age',
        'start_date',
        'end_date',
        'special_instructions',
        'status',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'start_date' => 'date',
            'end_date' => 'date',
        ];
    }
}
