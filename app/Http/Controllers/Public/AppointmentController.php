<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AppointmentController extends Controller
{
    public function store(Request $request, string $locale): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:30'],
            'animal_type' => ['required', 'string', 'max:50'],
            'reason' => ['nullable', 'string', 'max:255'],
            'desired_date' => ['nullable', 'date'],
        ]);

        $appointment = Appointment::create($validated);

        try {
            Mail::raw(
                "Nouvelle demande de rendez-vous :\n\n"
                ."Nom: {$appointment->name}\n"
                ."Téléphone: {$appointment->phone}\n"
                ."Animal: {$appointment->animal_type}\n"
                ."Motif: {$appointment->reason}\n"
                ."Date souhaitée: {$appointment->desired_date}\n",
                function ($message) {
                    $message->to(config('mail.from.address', 'admin@example.com'))
                        ->subject('Nouvelle demande de rendez-vous - Le Golf PetCare');
                }
            );
        } catch (\Throwable $e) {
            // Silent fail for now; logging can be added later.
        }

        return redirect()
            ->route('home', ['locale' => $locale])
            ->with('success', __('Votre demande de rendez-vous a bien été envoyée. Nous vous contacterons rapidement.'));
    }
}

