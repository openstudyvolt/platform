# Email Confirmation Feature

This document describes the steps taken to implement email verification for new accounts.

## What was implemented

- **User model** now implements Laravel's `MustVerifyEmail` interface and uses the corresponding trait.
- A new notification `VerifyEmailQueued` extends Laravel's default verification notification and implements `ShouldQueue` so that emails are queued.
- Registration triggers a queued verification email via an overridden `sendEmailVerificationNotification` method.
- Added a Pest test to verify that a verification email is sent upon registration.

## Why these changes

Implementing `MustVerifyEmail` enables Laravel's built‑in verification flow. Queueing the notification prevents delays during registration, improving user experience. The test ensures the feature works and guards against regressions.
