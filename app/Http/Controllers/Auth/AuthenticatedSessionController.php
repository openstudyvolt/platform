<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Show the login page.
     */
    public function create(Request $request): Response
    {
        return Inertia::render('auth/login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => $request->session()->get('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        // If user still has name column instead of first/last name, migrate the data
        $user = Auth::user();
        if (isset($user->name) && (!$user->first_name || !$user->last_name)) {
            $nameParts = explode(' ', $user->name);
            if (count($nameParts) >= 2) {
                $firstName = array_shift($nameParts);
                $lastName = array_pop($nameParts);
                $middleName = count($nameParts) > 0 ? implode(' ', $nameParts) : null;

                $user->first_name = $firstName;
                $user->middle_name = $middleName;
                $user->last_name = $lastName;
                $user->save();
            }
        }

        $request->session()->regenerate();

        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
