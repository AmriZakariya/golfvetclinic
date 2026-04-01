<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Grooming;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class GroomingController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Groomings/Index', [
            'groomings' => Grooming::query()->latest('id')->paginate(20),
        ]);
    }

    public function update(Request $request, Grooming $grooming): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'in:pending,confirmed,cancelled,done'],
            'notes' => ['nullable', 'string', 'max:5000'],
        ]);

        $grooming->update($validated);

        return back();
    }
}
