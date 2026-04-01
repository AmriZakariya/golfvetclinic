<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(string $locale): Response
    {
        return Inertia::render('Public/Home', [
            'locale' => $locale,
            'testimonials' => Testimonial::query()
                ->where('is_published', true)
                ->orderByDesc('sort_order')
                ->orderByDesc('id')
                ->take(8)
                ->get(['id', 'client_name', 'rating', 'content']),
        ]);
    }
}
