<?php

namespace App\Traits;

use const FILTER_VALIDATE_EMAIL;

use function filter_var;

trait UsesLoginCredentials
{
    /**
     * Build credentials' array using email or username.
     *
     * @param  array{login:string,password:string}  $data
     * @return array<string, string>
     */
    protected function credentialsFrom(array $data): array
    {
        $field = filter_var($data['login'], FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        return [
            $field => $data['login'],
            'password' => $data['password'],
        ];
    }
}
