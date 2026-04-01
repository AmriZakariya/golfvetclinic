<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AmbulanceRequest;
use App\Models\Appointment;
use App\Models\Boarding;
use App\Models\CommunityPost;
use App\Models\Grooming;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'counts' => [
                'appointments_pending' => Appointment::where('status', 'pending')->count(),
                'ambulance_pending' => AmbulanceRequest::where('status', 'pending')->count(),
                'boarding_pending' => Boarding::where('status', 'pending')->count(),
                'grooming_pending' => Grooming::where('status', 'pending')->count(),
                'community_pending' => CommunityPost::where('status', 'pending')->count(),
            ],
        ]);
    }
}
