@component('mail::message')
# Reset your password

We received a request to reset your password. Click the button below to choose a new one.

@component('mail::button', ['url' => $url])
Reset Password
@endcomponent

This link will expire in {{ config('auth.passwords.'.config('auth.defaults.passwords').'.expire') }} minutes.
If you didn't request a password reset, feel free to ignore this email.

Thanks,
{{ config('app.name') }} Team
@endcomponent
