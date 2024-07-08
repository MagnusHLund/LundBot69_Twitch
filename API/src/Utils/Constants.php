<?php

namespace LundBot69Api\Utils;

class Constants
{
    private static $instance = null;

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new Constants();
        }
        return self::$instance;
    }


    public static function getDatabaseInfo()
    {
        return array(
            "DB_HOST" => $_ENV['DB_HOST'],
            "DB_USER" => $_ENV['DB_USER'],
            "DB_PASSWORD" => $_ENV['DB_PASSWORD'],
            "DB_DATABASE" => $_ENV['DB_DATABASE'],
        );
    }

    public static function getTwitchClientID()
    {
        return $_ENV['TWITCH_CLIENT_ID'];
    }

    public static function getTwitchClientSecret()
    {
        return $_ENV['TWITCH_CLIENT_SECRET'];
    }

    public static function getTwitchRedirectUri()
    {
        return $_ENV['TWITCH_REDIRECT_URI'];
    }

    public static function getTwitchScopes()
    {
        return implode(' ', [
            'moderator:read:followers',
            'moderator:read:chatters',
            'channel:read:vips',
            'channel:read:subscriptions',
            'channel:read:goals',
        ]);
    }

    public static function getKid()
    {
        return $_ENV['KID'];
    }

    public static function getAllowedOrigins()
    {
        return explode(', ', $_ENV['ALLOWED_HOSTS']);
    }
}
