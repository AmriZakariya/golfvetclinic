<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class BoutiqueController extends Controller
{
    public function __invoke(string $locale): Response
    {
        return Inertia::render('Public/Boutique', [
            'locale' => $locale,
            'products' => Product::query()
                ->where('is_active', true)
                ->orderBy('category')
                ->orderBy('name')
                ->get(),
        ]);
    }
}
