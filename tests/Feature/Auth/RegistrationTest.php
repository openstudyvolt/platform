<?php

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

test('registration fails with invalid data', function () {
    $response = $this->from('/register')->post('/register', [
        'first_name' => '',
        'last_name' => '',
        'email' => 'invalid-email',
        'password' => 'password',
        'password_confirmation' => 'wrong',
    ]);

    $response->assertRedirect('/register');
    $response->assertSessionHasErrors(['first_name', 'last_name', 'email', 'password']);
    $this->assertGuest();
});

