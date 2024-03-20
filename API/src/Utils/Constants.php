<?php

namespace LundBot69Api\Utils;

class Constants
{
    public function getDatabaseInfo()
    {
        return array(
            "DB_HOST" => $_ENV['DB_HOST'],
            "DB_USER" => $_ENV['DB_USER'],
            "DB_PASSWORD" => $_ENV['DB_PASSWORD'],
            "DB_DATABASE" => $_ENV['DB_DATABASE'],
        );
    }

    public function getTwitchClientID()
    {
        return $_ENV['TWITCH_CLIENT_ID'];
    }

    public function getTwitchClientSecret()
    {
        return $_ENV['TWITCH_CLIENT_SECRET'];
    }

    public function getTwitchRedirectUri()
    {
        return $_ENV['TWITCH_REDIRECT_URI'];
    }

    public function getTwitchScopes()
    {
        return implode(' ', [
            'moderator:read:followers',
            'moderator:read:chatters',
            'channel:read:vips',
            'channel:read:subscriptions',
            'channel:read:goals',
        ]);
    }

    public function getKid()
    {
        return $_ENV['KID'];
    }
}
