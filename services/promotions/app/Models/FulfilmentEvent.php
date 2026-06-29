<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class FulfilmentEvent extends Model
{
    /** @use HasFactory<UserFactory> */
    use HasFactory;

    protected $table = 'fulfilment_events';

    public $timestamps = false;

    [Fillable(['event_id', 'order_id', 'status', 'received_at', 'processed_at', 'error_message'])]

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'received_at' => 'datetime',
            'processed_at' => 'datetime'
        ];

    }

    public function isProcessed(): bool
    {
        return !is_null($this->processed_at);
    }

    public function hasFailed(): bool
    {
        return $this->status === 'failed';
    }
};