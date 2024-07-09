<?php

namespace LundBot69Api\Utils;

class ModelMapper
{
    const MODELS = [
        'CommandUserCooldowns' => \LundBot69Api\Models\ORM\CommandUserCooldowns::class,
        'SongRequestBannedAccounts' => \LundBot69Api\Models\ORM\BannedAccounts::class,
        'SongRequestBannedSongs' => \LundBot69Api\Models\ORM\BannedSongs::class,
        'SongRequests' => \LundBot69Api\Models\ORM\SongRequests::class,
        'DefaultSongs' => \LundBot69Api\Models\ORM\DefaultSongs::class,
        'RateLimiting' => \LundBot69Api\Models\ORM\RateLimiting::class,
        'Giveaways' => \LundBot69Api\Models\ORM\Giveaways::class,
        'Commands' => \LundBot69Api\Models\ORM\Commands::class,
        'Creators' => \LundBot69Api\Models\ORM\Creators::class,
        'Settings' => \LundBot69Api\Models\ORM\Settings::class,
        'Messages' => \LundBot69Api\Models\ORM\Messages::class,
        'Points' => \LundBot69Api\Models\ORM\Points::class
    ];

    public static function getModelClass($model)
    {
        return self::MODELS[$model] ?? null;
    }
}
