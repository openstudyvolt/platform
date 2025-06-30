<?php

namespace App\Models;

use App\Enums\SummaryStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Summary extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'content',
        'original_content',
        'file_path',
        'file_type',
        'word_count',
        'metadata',
        'status',
        'processed_at',
    ];

    protected $casts = [
        'metadata' => 'array',
        'status' => SummaryStatus::class,
        'processed_at' => 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function aiChats(): HasMany
    {
        return $this->hasMany(AiChat::class);
    }
}
