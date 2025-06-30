<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\VerifyEmail as BaseVerifyEmail;
use Illuminate\Contracts\Queue\ShouldQueue;

class VerifyEmailQueued extends BaseVerifyEmail implements ShouldQueue
{
    // Inherits all behavior from the base notification while enabling queueing
}
