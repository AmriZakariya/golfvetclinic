<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommunityPost extends Model
{
    protected $fillable = [
        'type',
        'photo_path',
        'description',
        'location_text',
        'phone',
        'posted_at',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'posted_at' => 'date',
        ];
    }
}
