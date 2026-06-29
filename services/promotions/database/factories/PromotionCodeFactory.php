<?php

namespace Database\Factories;

use App\Models\PromotionCode;
use Illuminate\Database\Eloquent\Factories\Factory;

class PromotionCodeFactory extends Factory
{
    protected $model = PromotionCode::class;

    public function definition(): array
    {
        return [
            'code' => strtoupper($this->faker->unique()->bothify('PROMO###')),
            'status' => 'active',
            'discount_type' => 'percentage',
            'discount_value' => 10,
            'minimum_basket_minor' => 2000,
            'usage_limit' => 100,
            'usage_count' => 0,
            'starts_at' => now()->subDay(),
            'expires_at' => now()->addMonth(),
        ];
    }

    public function expired(): static
    {
        return $this->state(fn () => [
            'status' => 'expired',
            'expires_at' => now()->subDay(),
        ]);
    }

    public function fixedDiscount(): static
    {
        return $this->state(fn () => [
            'discount_type' => 'fixed',
            'discount_value' => 500,
        ]);
    }
}