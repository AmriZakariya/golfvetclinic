<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AmbulanceRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AmbulanceRequestController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('Admin/AmbulanceRequests/Index', [
            'requests' => AmbulanceRequest::query()
                ->latest('id')
                ->paginate(20)
                ->withQueryString(),
        ]);
    }

    public function update(Request $request, AmbulanceRequest $ambulance_request): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'in:pending,in_progress,done,cancelled'],
            'notes' => ['nullable', 'string', 'max:5000'],
        ]);

        $ambulance_request->update($validated);

        return back();
    }
}
