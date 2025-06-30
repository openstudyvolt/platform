<?php

use Illuminate\Support\Facades\Notification;

test('registration screen can be rendered', function () {
    $response = $this->get('/register');

    $response->assertStatus(200);
});

test('new users can register', function () {
    $response = $this->post('/register', [
        'first_name' => 'Test',
        'last_name' => 'User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route('dashboard', absolute: false));
});

test('verification email is sent after registration', function () {
    Notification::fake();

    $this->post('/register', [
        'first_name' => 'Test',
        'last_name' => 'User',
        'email' => 'verify@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $user = \App\Models\User::where('email', 'verify@example.com')->first();

    Notification::assertSentTo($user, \App\Notifications\VerifyEmailQueued::class);
});
