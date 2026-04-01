<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\AmbulanceRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class AmbulanceRequestController extends Controller
{
    public function store(Request $request, string $locale): RedirectResponse
    {
        $validated = $request->validate([
            'animal_type' => ['required', 'string', 'max:50'],
            'symptoms' => ['required', 'string', 'max:255'],
            'location_text' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:30'],
        ]);

        $data = array_merge($validated, [
            'is_emergency' => true,
        ]);

        $ambulanceRequest = AmbulanceRequest::create($data);

        try {
            Mail::raw(
                "Nouvelle demande d'ambulance vétérinaire :\n\n"
                ."Téléphone: {$ambulanceRequest->phone}\n"
                ."Animal: {$ambulanceRequest->animal_type}\n"
                ."Symptômes: {$ambulanceRequest->symptoms}\n"
                ."Localisation: {$ambulanceRequest->location_text}\n",
                function ($message) {
                    $message->to(config('mail.from.address', 'admin@example.com'))
                        ->subject('Urgence ambulance vétérinaire - Le Golf PetCare');
                }
            );
        } catch (\Throwable $e) {
            // Silent fail for now; logging can be added later.
        }

        return redirect()
            ->route('ambulance', ['locale' => $locale])
            ->with('success', __('Votre demande d\'ambulance a bien été envoyée. Nous vous appelons au plus vite.'));
    }
}

