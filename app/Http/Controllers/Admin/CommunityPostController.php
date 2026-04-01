<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CommunityPost;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CommunityPostController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/CommunityPosts/Index', [
            'posts' => CommunityPost::query()->latest('id')->paginate(20),
        ]);
    }

    public function update(Request $request, CommunityPost $community_post): RedirectResponse
    {
        $validated = $request->validate([
            'status' => ['required', 'in:pending,approved,rejected'],
        ]);

        $community_post->update($validated);

        return back();
    }
}
