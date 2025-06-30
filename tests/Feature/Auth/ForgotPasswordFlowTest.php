<?php

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Notification;

it('allows a user to reset a forgotten password', function () {
    Notification::fake();

    $user = User::factory()->create();

    // Request reset link
    $this->post(route('password.email'), ['email' => $user->email])
        ->assertSessionHas('status');

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user) {
        // Visit reset form
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
});
