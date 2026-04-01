<?php

use App\Http\Controllers\Admin\AmbulanceRequestController as AdminAmbulanceRequestController;
use App\Http\Controllers\Admin\AppointmentController as AdminAppointmentController;
use App\Http\Controllers\Admin\BoardingController as AdminBoardingController;
use App\Http\Controllers\Admin\CommunityPostController as AdminCommunityPostController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\GroomingController as AdminGroomingController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Public\AmbulanceRequestController;
use App\Http\Controllers\Public\AppointmentController;
use App\Http\Controllers\Public\BoardingController;
use App\Http\Controllers\Public\BoutiqueController;
use App\Http\Controllers\Public\CommunityController;
use App\Http\Controllers\Public\GroomingController;
use App\Http\Controllers\Public\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('home', ['locale' => 'fr']);
});

Route::middleware('guest')->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);
});

Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

Route::middleware('auth')
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::get('/', fn () => redirect()->route('admin.dashboard'));
        Route::get('/dashboard', DashboardController::class)->name('dashboard');

        Route::get('/appointments', [AdminAppointmentController::class, 'index'])->name('appointments.index');
        Route::patch('/appointments/{appointment}', [AdminAppointmentController::class, 'update'])->name('appointments.update');

        Route::get('/ambulance-requests', [AdminAmbulanceRequestController::class, 'index'])->name('ambulance-requests.index');
        Route::patch('/ambulance-requests/{ambulance_request}', [AdminAmbulanceRequestController::class, 'update'])->name('ambulance-requests.update');

        Route::get('/boardings', [AdminBoardingController::class, 'index'])->name('boardings.index');
        Route::patch('/boardings/{boarding}', [AdminBoardingController::class, 'update'])->name('boardings.update');

        Route::get('/groomings', [AdminGroomingController::class, 'index'])->name('groomings.index');
        Route::patch('/groomings/{grooming}', [AdminGroomingController::class, 'update'])->name('groomings.update');

        Route::get('/community-posts', [AdminCommunityPostController::class, 'index'])->name('community-posts.index');
        Route::patch('/community-posts/{community_post}', [AdminCommunityPostController::class, 'update'])->name('community-posts.update');
    });

Route::prefix('{locale}')
    ->whereIn('locale', ['fr', 'en'])
    ->middleware(\App\Http\Middleware\SetLocale::class)
    ->group(function () {
        Route::get('/', HomeController::class)->name('home');

        Route::post('/rdv', [AppointmentController::class, 'store'])->name('appointments.store');
        Route::post('/ambulance', [AmbulanceRequestController::class, 'store'])->name('ambulance.store');
        Route::post('/pension', [BoardingController::class, 'store'])->name('pension.store');
        Route::post('/toilettage', [GroomingController::class, 'store'])->name('toilettage.store');
        Route::post('/communaute', [CommunityController::class, 'store'])->name('communaute.store');

        Route::get('/soins-veterinaires', function (string $locale) {
            return Inertia::render('Public/Soins', ['locale' => $locale]);
        })->name('soins');

        Route::get('/ambulance-veterinaire-tanger', function (string $locale) {
            return Inertia::render('Public/Ambulance', ['locale' => $locale]);
        })->name('ambulance');

        Route::get('/pension-animaux-tanger', function (string $locale) {
            return Inertia::render('Public/Pension', ['locale' => $locale]);
        })->name('pension');

        Route::get('/toilettage-chien-tanger', function (string $locale) {
            return Inertia::render('Public/Toilettage', ['locale' => $locale]);
        })->name('toilettage');

        Route::get('/boutique', BoutiqueController::class)->name('boutique');

        Route::get('/contact-clinique-veterinaire-tanger', function (string $locale) {
            return Inertia::render('Public/Contact', ['locale' => $locale]);
        })->name('contact');

        Route::get('/communaute', [CommunityController::class, 'index'])->name('communaute');
    });
