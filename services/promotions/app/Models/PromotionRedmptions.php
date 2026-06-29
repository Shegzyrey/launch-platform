<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class PromotionRedemptions extends Model
{
    /** @use HasFactory<UserFactory> */
    use HasFactory;

    protected $table = 'promotion_redemptions';

    public $timestamps = false;

    [Fillable(['promotion_code', 'order_id', 'customer_email_hash', 'discount_minor', 'created_at'])]

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'discount_minor' => 'integer',
            'created_at' => 'datetime'
        ];

    }

    public function promotionCode()
    {
        return $this->belongsTo(PromotionCode::class, 'promotion_code', 'code');
    }
};