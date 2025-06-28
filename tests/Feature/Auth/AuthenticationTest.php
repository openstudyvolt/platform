<?php

use App\Models\User;

test('login screen can be rendered', function () {
    $response = $this->get('/login');

    $response->assertStatus(200);
});

test('users can authenticate using the login screen', function () {
    $user = User::factory()->create();

    $response = $this->post('/login', [
        'login' => $user->email,
        'password' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route('dashboard', absolute: false));
});

test('users can authenticate using their username', function () {
    $user = User::factory()->create(['username' => 'johndoe']);

    $response = $this->post('/login', [
        'login' => 'johndoe',
        'password' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(route('dashboard', absolute: false));
});

test('users can not authenticate with invalid password', function () {
    $user = User::factory()->create();

    $this->post('/login', [
        'login' => $user->email,
        'password' => 'wrong-password',
    ]);

    $this->assertGuest();
});

test('users can logout', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('/logout');

    $this->assertGuest();
    $response->assertRedirect('/');
});

test('API users can authenticate with email', function () {
    $user = User::factory()->create();

    $response = $this->postJson('/api/login', [
        'login' => $user->email,
        'password' => 'password',
    ]);

    $response->assertOk()->assertJsonStructure([
        'token',
        'user',
    ]);
});

test('API users can authenticate with username', function () {
    $user = User::factory()->create(['username' => 'janedoe']);

    $response = $this->postJson('/api/login', [
        'login' => 'janedoe',
        'password' => 'password',
    ]);

    $response->assertOk()->assertJsonStructure([
        'token',
        'user',
    ]);
});
