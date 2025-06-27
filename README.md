# Platform Authentication and API

This project now includes API authentication using **Laravel Passport** and role
management powered by the **Spatie Laravel Permission** package.

## Setup

1. Install PHP dependencies:

```bash
composer install
```

2. Generate the Passport encryption keys, publish Spatie's configuration, and migrate the database:

```bash
php artisan migrate
php artisan vendor:publish --provider="Spatie\\Permission\\PermissionServiceProvider" --tag="config"
php artisan vendor:publish --provider="Spatie\\Permission\\PermissionServiceProvider" --tag="migrations"
php artisan passport:install
```

3. Start the development server:

```bash
php artisan serve
```

## API Usage

The API provides a `POST /api/login` endpoint which returns an access token.
You may authenticate using either a username or an email address with your
password. Use the token in the `Authorization` header as a Bearer token to
access protected endpoints such as `GET /api/user`.
