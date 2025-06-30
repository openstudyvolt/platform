<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Arr;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

use function array_pop;
use function array_shift;
use function count;
use function implode;

class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasApiTokens, HasFactory, HasRoles, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'username',
        'email',
        'phone',
        'birthday',
        'password',
        'provider',
        'provider_id',
        'provider_token',
        'provider_refresh_token',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = [
        'full_name', 'name',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'phone_verified_at' => 'datetime',
            'password' => 'hashed',
            'birthday' => 'date',
        ];
    }

    /**
     * Get the user's full name.
     *
     * @noinspection PhpUnused
     */
    public function getFullNameAttribute(): string
    {
        if ($this->middle_name) {
            return Arr::join([$this->first_name, $this->middle_name, $this->last_name], ' ');
        }

        return Arr::join([$this->first_name, $this->last_name], ' ');
    }

    /** @noinspection PhpUnused */
    public function getNameAttribute(): string
    {
        return $this->getFullNameAttribute();
    }

    /** @noinspection PhpUnused */
    public function setNameAttribute(?string $value): void
    {
        $nameParts = explode(' ', $value);

        $this->first_name = array_shift($nameParts);
        $this->last_name = array_pop($nameParts);
        $this->middle_name = count($nameParts) > 0 ? implode(' ', $nameParts) : null;
    }

    // Role and permission handling is provided by the HasRoles trait

    public function summaries(): HasMany
    {
        return $this->hasMany(Summary::class);
    }

    public function aiChats(): HasMany
    {
        return $this->hasMany(AiChat::class);
    }

    public function userPoints(): HasMany
    {
        return $this->hasMany(UserPoint::class);
    }

    public function badges(): BelongsToMany
    {
        return $this->belongsToMany(Badge::class, 'user_badges')
            ->withPivot('earned_at', 'metadata')
            ->withTimestamps();
    }

    public function getTotalPointsAttribute(): int
    {
        return $this->userPoints()->sum('points');
    }
}
