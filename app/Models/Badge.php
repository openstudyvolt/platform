<?php

namespace App\Models;

use App\Enums\BadgeRarity;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Badge extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'icon',
        'color',
        'rarity',
        'requirements',
        'points_reward',
        'is_active',
    ];

    protected $casts = [
        'requirements' => 'array',
        'rarity' => BadgeRarity::class,
        'is_active' => 'boolean',
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_badges')
            ->withPivot('earned_at', 'metadata')
            ->withTimestamps();
    }
}
