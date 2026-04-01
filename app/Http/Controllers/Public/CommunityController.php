<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\CommunityPost;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CommunityController extends Controller
{
    public function index(string $locale): Response
    {
        $posts = CommunityPost::query()
            ->where('status', 'approved')
            ->latest('posted_at')
            ->latest('id')
            ->paginate(12)
            ->withQueryString();

        return Inertia::render('Public/Communaute', [
            'locale' => $locale,
            'posts' => $posts,
        ]);
    }

    public function store(Request $request, string $locale): RedirectResponse
    {
        $validated = $request->validate([
            'type' => ['required', 'in:lost,found,story'],
            'description' => ['required', 'string', 'max:2000'],
            'location_text' => ['nullable', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:30'],
            'posted_at' => ['nullable', 'date'],
        ]);

        CommunityPost::create([
            ...$validated,
            'status' => 'pending',
            'posted_at' => $validated['posted_at'] ?? now(),
        ]);

        return redirect()
            ->route('communaute', ['locale' => $locale])
            ->with('success', __('Votre publication a été envoyée. Elle sera visible après modération.'));
    }
}
