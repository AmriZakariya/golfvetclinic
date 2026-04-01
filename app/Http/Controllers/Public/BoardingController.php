<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Boarding;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class BoardingController extends Controller
{
    public function store(Request $request, string $locale): RedirectResponse
    {
        $validated = $request->validate([
            'owner_name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:30'],
            'animal_type' => ['required', 'string', 'max:50'],
            'start_date' => ['required', 'date'],
            'end_date' => ['required', 'date', 'after_or_equal:start_date'],
            'special_instructions' => ['nullable', 'string', 'max:2000'],
        ]);

        $boarding = Boarding::create($validated);

        try {
            Mail::raw(
                "Nouvelle demande de pension :\n\n"
                ."Propriétaire: {$boarding->owner_name}\n"
                ."Tél: {$boarding->phone}\n"
                ."Animal: {$boarding->animal_type}\n"
                ."Du {$boarding->start_date} au {$boarding->end_date}\n"
                ."Instructions: {$boarding->special_instructions}\n",
                function ($message) {
                    $message->to(config('mail.from.address', 'admin@example.com'))
                        ->subject('Demande de pension - Le Golf PetCare');
                }
            );
        } catch (\Throwable $e) {
            //
        }

        return redirect()
            ->route('pension', ['locale' => $locale])
            ->with('success', __('Votre demande de pension a bien été enregistrée. Nous vous recontactons rapidement.'));
    }
}
