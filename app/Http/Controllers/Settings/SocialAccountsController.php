<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SocialAccountsController extends Controller
{
    /**
     * Display connected social accounts.
     */
    public function index(Request $request): Response
    {
        $user = $request->user();

        $connectedAccounts = [];
        if ($user->provider) {
            $connectedAccounts[] = [
                'provider' => $user->provider,
                'provider_id' => $user->provider_id,
                'connected_at' => $user->updated_at->toDateTimeString(),
            ];
        }

        return Inertia::render('settings/social-accounts', [
            'connectedAccounts' => $connectedAccounts,
        ]);
    }

    /**
     * Disconnect a social account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $user = $request->user();

        // Only allow disconnecting if the user has a password set
        if (! $user->password) {
            return back()->withErrors([
                'provider' => 'You cannot disconnect your only login method. Please set a password first.',
            ]);
        }

        $user->update([
            'provider' => null,
            'provider_id' => null,
            'provider_token' => null,
            'provider_refresh_token' => null,
        ]);

        return back()->with('status', 'social-account-disconnected');
    }
}
