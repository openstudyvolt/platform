<?php

return [
    App\Providers\AppServiceProvider::class,
    OpenStudyVolt\Support\Providers\SupportServiceProvider::class,
    OpenStudyVolt\Auth\Providers\AuthServiceProvider::class,
    OpenStudyVolt\Logic\Providers\LogicServiceProvider::class,
    App\Providers\AuthServiceProvider::class,
    Laravel\Passport\PassportServiceProvider::class,
    Spatie\Permission\PermissionServiceProvider::class,
];
