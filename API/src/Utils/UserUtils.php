<?php

namespace LundBot69Api\Utils;

use LundBot69Api\Models\User;
use LundBot69Api\Utils\Database;

class UserUtils
{
    const CREATOR_MODEL = "Creators";

    private static $instance = null;

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new UserUtils();
        }
        return self::$instance;
    }


    public static function getCreatorId($creator = null)
    {
        if (!$creator) {
            $decodedJwt = Authentication::decodeJwt($_COOKIE['jwt']);
            $twitchAccessToken = $decodedJwt->sub;
            $user = new user($twitchAccessToken, $_SESSION["user_refresh_token"] ?? null);
            $creator = $user->getTwitchUsername();
        }

        $userIdArray = Database::read(
            self::CREATOR_MODEL,
            ['twitch_username' => $creator],
            'creator_id'
        );

        return $userIdArray[0]['creator_id'];
    }
}
