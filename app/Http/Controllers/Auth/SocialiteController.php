<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
    /**
     * Redirect the user to the provider authentication page.
     */
    public function redirect(string $provider): RedirectResponse
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Handle provider callback.
     */
    public function callback(string $provider): RedirectResponse
    {
        try {
            $socialUser = Socialite::driver($provider)->user();

            // Find existing user or create a new one
            $user = User::where('provider_id', $socialUser->getId())
                ->where('provider', $provider)
                ->first();

            if (! $user) {
                // Check if user with this email already exists
                $existingUser = User::where('email', $socialUser->getEmail())->first();

                if ($existingUser) {
                    // Update existing user with provider info
                    $existingUser->update([
                        'provider' => $provider,
                        'provider_id' => $socialUser->getId(),
                        'provider_token' => $socialUser->token,
                        'provider_refresh_token' => $socialUser->refreshToken ?? null,
                    ]);

                    $user = $existingUser;
                } else {
                    // Extract name components
                    $nameParts = $this->extractNameParts($socialUser->getName());

                    // Create new user
                    $user = User::create([
                        'first_name' => $nameParts['first_name'],
                        'middle_name' => $nameParts['middle_name'],
                        'last_name' => $nameParts['last_name'],
                        'username' => Str::slug($socialUser->getNickname() ?? Str::before($socialUser->getEmail(), '@')),
                        'email' => $socialUser->getEmail(),
                        'password' => Hash::make(Str::random(24)),
                        'provider' => $provider,
                        'provider_id' => $socialUser->getId(),
                        'provider_token' => $socialUser->token,
                        'provider_refresh_token' => $socialUser->refreshToken ?? null,
                    ]);
                }
            } else {
                // Update tokens
                $user->update([
                    'provider_token' => $socialUser->token,
                    'provider_refresh_token' => $socialUser->refreshToken ?? null,
                ]);
            }

            // Login user
            Auth::login($user);

            return redirect()->intended('/dashboard');

        } catch (Exception $e) {
            return redirect()->route('login')->withErrors([
                'email' => 'Error connecting to '.ucfirst($provider).'. Please try again.',
            ]);
        }
    }

    /**
     * Extract first, middle, and last name from a full name string.
     */
    protected function extractNameParts(?string $fullName): array
    {
        if (empty($fullName)) {
            return [
                'first_name' => 'User',
                'middle_name' => null,
                'last_name' => Str::random(8),
            ];
        }

        $parts = explode(' ', trim($fullName));

        if (count($parts) === 1) {
            return [
                'first_name' => $parts[0],
                'middle_name' => null,
                'last_name' => '',
            ];
        }

        if (count($parts) === 2) {
            return [
                'first_name' => $parts[0],
                'middle_name' => null,
                'last_name' => $parts[1],
            ];
        }

        // If more than 2 parts, treat the middle as middle name(s)
        $firstName = array_shift($parts);
        $lastName = array_pop($parts);
        $middleName = implode(' ', $parts);

        return [
            'first_name' => $firstName,
            'middle_name' => $middleName,
            'last_name' => $lastName,
        ];
    }
}
