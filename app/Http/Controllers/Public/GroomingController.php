<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Grooming;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class GroomingController extends Controller
{
    public function store(Request $request, string $locale): RedirectResponse
    {
        $validated = $request->validate([
            'owner_name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:30'],
            'breed' => ['required', 'string', 'max:100'],
            'weight_kg' => ['nullable', 'numeric', 'min:0', 'max:200'],
            'service_type' => ['required', 'string', 'max:100'],
            'preferred_date' => ['nullable', 'date'],
        ]);

        $grooming = Grooming::create($validated);

        try {
            Mail::raw(
                "Nouvelle demande de toilettage :\n\n"
                ."Propriétaire: {$grooming->owner_name}\n"
                ."Tél: {$grooming->phone}\n"
                ."Race: {$grooming->breed}\n"
                ."Poids: {$grooming->weight_kg}\n"
                ."Prestation: {$grooming->service_type}\n"
                ."Date souhaitée: {$grooming->preferred_date}\n",
                function ($message) {
                    $message->to(config('mail.from.address', 'admin@example.com'))
                        ->subject('Demande de toilettage - Le Golf PetCare');
                }
            );
        } catch (\Throwable $e) {
            //
        }

        return redirect()
            ->route('toilettage', ['locale' => $locale])
            ->with('success', __('Votre demande de toilettage a bien été enregistrée.'));
    }
}
