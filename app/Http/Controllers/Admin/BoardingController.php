<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Boarding;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BoardingController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Boardings/Index', [
            'boardings' => Boarding::query()->latest('id')->paginate(20),
        ]);
    }

    public function update(Request $request, Boarding $boarding): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'in:pending,confirmed,cancelled,done'],
            'notes' => ['nullable', 'string', 'max:5000'],
        ]);

        $boarding->update($validated);

        return back();
    }
}
