<?php

namespace App\Models;

use App\Enums\ChatStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AiChat extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'summary_id',
        'user_message',
        'ai_response',
        'context',
        'model_used',
        'tokens_used',
        'processing_time',
        'status',
    ];

    protected $casts = [
        'context' => 'array',
        'status' => ChatStatus::class,
        'processing_time' => 'decimal:3',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function summary(): BelongsTo
    {
        return $this->belongsTo(Summary::class);
    }
}
