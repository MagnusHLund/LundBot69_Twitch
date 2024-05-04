<?php

namespace LundBot69Api\Utils;

class ModelMapper
{
    const MODELS = [
        'SongRequestBannedAccounts' => \LundBot69Api\ORMModels\BannedAccounts::class,
        'SongRequestBannedSongs' => \LundBot69Api\ORMModels\BannedSongs::class,
        'SongRequests' => \LundBot69Api\ORMModels\SongRequests::class,
        'DefaultSongs' => \LundBot69Api\ORMModels\DefaultSongs::class,
        'RateLimiting' => \LundBot69Api\ORMModels\RateLimiting::class,
        'Giveaways' => \LundBot69Api\ORMModels\Giveaways::class,
        'Commands' => \LundBot69Api\ORMModels\Commands::class,
        'Creators' => \LundBot69Api\ORMModels\Creators::class,
        'Settings' => \LundBot69Api\ORMModels\Settings::class,
        'Messages' => \LundBot69Api\ORMModels\Messages::class,
        'Points' => \LundBot69Api\ORMModels\Points::class
    ];

    public static function getModelClass($model)
    {
        return self::MODELS[$model] ?? null;
    }
}
