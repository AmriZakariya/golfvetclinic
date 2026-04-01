<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AppointmentController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('Admin/Appointments/Index', [
            'appointments' => Appointment::query()
                ->latest('id')
                ->paginate(20)
                ->withQueryString(),
        ]);
    }

    public function update(Request $request, Appointment $appointment): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'in:pending,confirmed,cancelled,done'],
            'notes' => ['nullable', 'string', 'max:5000'],
        ]);

        $appointment->update($validated);

        return back();
    }
}
