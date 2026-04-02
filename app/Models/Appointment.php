<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'animal_type',
        'animal_other_name',
        'animal_age',
        'reason',
        'desired_date',
        'status',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'desired_date' => 'date',
        ];
    }
}
