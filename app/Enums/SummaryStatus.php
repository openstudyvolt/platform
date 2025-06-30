<?php

namespace App\Enums;

enum SummaryStatus: string
{
    case PROCESSING = 'processing';
    case COMPLETED = 'completed';
    case FAILED = 'failed';
}
