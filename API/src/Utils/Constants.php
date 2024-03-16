<?php // Historical moment: Always fucking include php here, took me 2 hours to figure out why TwitchAuthHandler could not find Constants. Because of missing php in the <?php tag.

namespace LundBot69Api\Utils;

class Constants
{
    public function GetDatabaseInfo()
    {
        return array(
            "DB_HOST" => $_ENV['DB_HOST'],
            "DB_USER" => $_ENV['DB_USER'],
            "DB_PASSWORD" => $_ENV['DB_PASSWORD'],
            "DB_DATABASE" => $_ENV['DB_DATABASE'],
        );
    }

    public function GetTwitchClientID()
    {
        return $_ENV['TWITCH_CLIENT_ID'];
    }

    public function GetTwitchClientSecret()
    {
        return $_ENV['TWITCH_CLIENT_SECRET'];
    }

    public function GetTwitchRedirectUri()
    {
        return $_ENV['TWITCH_REDIRECT_URI'];
    }

    public function GetTwitchScopes()
    {
        return implode(' ', [
            'moderator:read:followers',
            'moderator:read:chatters',
            'channel:read:vips',
            'channel:read:subscriptions',
            'channel:read:goals',
        ]);
    }
}
