<?php

use App\Models\User;
use Laravel\Socialite\Contracts\Provider;
use Laravel\Socialite\Contracts\User as SocialiteUser;
use Laravel\Socialite\Facades\Socialite;
use Mockery; // for mocking Socialite

it('logs in via google', function () {
    // Prepare fake socialite user
    $abstractUser = Mockery::mock(SocialiteUser::class);
    $abstractUser->shouldReceive('getId')->andReturn('google123');
    $abstractUser->shouldReceive('getEmail')->andReturn('google@example.com');
    $abstractUser->shouldReceive('getName')->andReturn('Google User');
    $abstractUser->token = 'token';
    $abstractUser->refreshToken = 'refresh';

    // Mock the provider
    $provider = Mockery::mock(Provider::class);
    $provider->shouldReceive('user')->andReturn($abstractUser);

    Socialite::shouldReceive('driver')->with('google')->andReturn($provider);

    // Hit the callback route
    $response = $this->get('/auth/google/callback');

    $response->assertRedirect(route('dashboard', absolute: false));

    // User created and authenticated
    $this->assertAuthenticated();
    $user = User::first();
    expect($user->provider)->toBe('google')
        ->and($user->provider_id)->toBe('google123');
});
