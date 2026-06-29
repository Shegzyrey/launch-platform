<?php

namespace Database\Seeders;

use App\Models\PromotionCode;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PromotionCodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PromotionCode::updateOrCreate(
            ['code' => 'WELCOME10'],
            [
                'status' => 'active',
                'discount_type' => 'percentage',
                'discount_value' => 10,
                'minimum_basket_minor' => 2000,
                'usage_limit' => 100,
                'usage_count' => 0,
                'starts_at' => now()->subDay(),
                'expires_at' => now()->addMonth(),
            ]
        );

        PromotionCode::updateOrCreate(
            ['code' => 'SAVE500'],
            [
                'status' => 'active',
                'discount_type' => 'fixed',
                'discount_value' => 500,
                'minimum_basket_minor' => 3000,
                'usage_limit' => 50,
                'usage_count' => 0,
                'starts_at' => now()->subDay(),
                'expires_at' => now()->addWeeks(2),
            ]
        );
    }
}
