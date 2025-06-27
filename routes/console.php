<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('s3:list', function () {
    $disk = Storage::disk('s3');

    foreach ($disk->files('') as $file) {
        $this->line($file);
    }
})->purpose('List files in the configured S3 bucket');
