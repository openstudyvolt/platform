# Email Registration

This feature implements a basic email/password registration flow using Laravel 12, Inertia and React 19.

## Implementation Details

- **Form Request Validation**: Added `RegisterRequest` to encapsulate validation rules for new users.
- **Controller Update**: `RegisteredUserController` now relies on `RegisterRequest` to validate incoming data before creating the user.
- **Test Coverage**: Extended the existing Pest test to include a failing registration scenario when provided data is invalid.
- **Documentation**: This report resides under `docs/features/email-registration/` as requested.

## Rationale

Using a dedicated FormRequest keeps controller logic concise and ensures consistent validation. Adding tests for both success and failure helps maintain reliability of the registration flow.
