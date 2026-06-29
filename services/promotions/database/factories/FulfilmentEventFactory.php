<?php

namespace Database\Factories;

use App\Models\PromotionRedemption;
use Illuminate\Database\Eloquent\Factories\Factory;

class PromotionRedemptionFactory extends Factory
{
    protected $model = PromotionRedemption::class;

    public function definition(): array
    {
        return [
            'promotion_code' => 'WELCOME10',
            'order_id' => 'ORD-' . $this->faker->unique()->numberBetween(1000, 9999),
            'customer_email_hash' => hash_hmac(
                'sha256',
                strtolower($this->faker->unique()->safeEmail()),
                config('app.key')
            ),
            'discount_minor' => 500,
            'created_at' => now(),
        ];
    }
}