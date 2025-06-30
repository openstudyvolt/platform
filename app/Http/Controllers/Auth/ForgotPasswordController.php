<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class ForgotPasswordController extends Controller
{
    /**
     * Display the form to request a password reset link.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('auth/forgot-password', [
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Send a password reset link to the given user.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate(['email' => 'required|email']);

        Password::sendResetLink($request->only('email'));

        return back()->with('status', __('A reset link will be sent if the account exists.'));
    }

    /**
     * Display the password reset form for the given token.
     */
    public function edit(Request $request, string $token): Response
    {
        return Inertia::render('auth/reset-password', [
            'token' => $token,
            'email' => $request->email,
        ]);
    }

    /**
     * Reset the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
        $request->validate([
            'token' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            return to_route('login')->with('status', __($status));
        }

        throw ValidationException::withMessages([
            'email' => [__($status)],
        ]);
    }
}
