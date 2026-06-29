<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

#[Fillable(['code', 'status', 'discount_type', 'discount_value',
'minimum_basket_minor', 'usage_limit', 'usage_count', 'starts_at', 'expires_at'])]
// #[Hidden(['password', 'remember_token'])]

class PromotionCode extends Model
{
    protected $table = 'promotion_codes';
    /** @use HasFactory<UserFactory> */
    use HasFactory;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'discount_value' => 'integer',
            'minimum_basket_minor' => 'integer',
            'usage_limit' => 'integer',
            'usage_count' => 'integer',
            'starts_at' => 'datetime',
            'expires_at' => 'datetime'
        ];

    }

    public function isActive(): bool
    {
        return $this->status === 'active'
            && (!$this->starts_at || now()->greaterThanOrEqualTo($this->starts_at))
            && (!$this->expires_at || now()->lessThanOrEqualTo($this->expires_at))
            && (!$this->usage_limit || $this->usage_count < $this->usage_limit);
    }
};



