<?php

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;

it('sends a reset link and updates the password', function () {
    Notification::fake();

    $user = User::factory()->create([
        'password' => Hash::make('secret'),
    ]);

    // Request a password reset link
    $this->post(route('password.email'), ['email' => $user->email])
        ->assertSessionHas('status');

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user) {
        // Display reset form
        $this->get(route('password.reset', ['token' => $notification->token, 'email' => $user->email]))
            ->assertOk();

        // Submit new password
        $this->post(route('password.store'), [
            'token' => $notification->token,
            'email' => $user->email,
            'password' => 'new-password',
            'password_confirmation' => 'new-password',
        ])->assertRedirect(route('login'))
            ->assertSessionHas('status');

        return true;
    });

    expect(Hash::check('new-password', $user->refresh()->password))->toBeTrue();
});
