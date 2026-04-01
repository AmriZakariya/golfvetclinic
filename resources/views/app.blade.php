<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Le Golf PetCare') }}</title>

        @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
            @vite(['resources/css/app.css', 'resources/js/app.js'])
            @inertiaHead
        @else
            <style>
                body { font-family: system-ui, sans-serif; background: #0f172a; color: #e2e8f0; padding: 2rem; max-width: 40rem; margin: auto; }
                code { background: #1e293b; padding: 0.2rem 0.4rem; border-radius: 0.25rem; }
            </style>
        @endif
    </head>
    <body class="font-sans antialiased">
        @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
            @inertia
        @else
            <h1>Assets front-end manquants</h1>
            <p>
                Lancez <code>npm install</code> puis <code>npm run dev</code> (développement)
                ou <code>npm run build</code> (production) à la racine du projet pour générer le manifeste Vite.
            </p>
        @endif
    </body>
</html>
