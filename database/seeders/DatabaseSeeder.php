<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Testimonial;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::query()->updateOrCreate(
            ['email' => 'admin@legolfpetcare.test'],
            [
                'name' => 'Administrateur',
                'password' => Hash::make('password'),
            ]
        );

        Testimonial::query()->firstOrCreate(
            ['client_name' => 'Famille B.'],
            [
                'rating' => 5,
                'content' => 'Équipe très professionnelle et bienveillante avec notre chien. La clinique est impeccable.',
                'is_published' => true,
                'sort_order' => 10,
            ]
        );

        Testimonial::query()->firstOrCreate(
            ['client_name' => 'Karim T.'],
            [
                'rating' => 5,
                'content' => 'Réactivité incroyable pour une urgence un dimanche. Merci à toute l’équipe du Golf PetCare.',
                'is_published' => true,
                'sort_order' => 9,
            ]
        );

        $products = [
            ['name' => 'Croquettes premium chien', 'description' => 'Sac 12 kg — nutrition équilibrée.', 'category' => 'food', 'price' => 420],
            ['name' => 'Pâtée chat stérilisé', 'description' => 'Boîtes lot de 12.', 'category' => 'food', 'price' => 180],
            ['name' => 'Laisse réfléchissante', 'description' => 'Longueur 1,5 m.', 'category' => 'accessories', 'price' => 95],
            ['name' => 'Shampooing hypoallergénique', 'description' => 'Pour peaux sensibles.', 'category' => 'hygiene', 'price' => 65],
        ];

        foreach ($products as $p) {
            Product::query()->firstOrCreate(
                ['name' => $p['name']],
                [
                    'description' => $p['description'],
                    'category' => $p['category'],
                    'price' => $p['price'],
                    'is_active' => true,
                ]
            );
        }
    }
}
