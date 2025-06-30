<?php

namespace App\Enums;

enum BadgeRarity: string
{
    case COMMON = 'common';
    case RARE = 'rare';
    case EPIC = 'epic';
    case LEGENDARY = 'legendary';
}
