<?php

namespace LundBot69Api\Utils;

use LundBot69Api\Models\User;
use LundBot69Api\Utils\Database;

class UserUtils
{
    const CREATOR_MODEL = "Creators";

    public static function getCreatorId($creator = null)
    {
        if (!$creator) {
            $user = new user($_SESSION["user_jwt"], $_SESSION["user_refresh_token"]);
            $creator = $user->getTwitchUsername();
        }

        return Database::read(
            self::CREATOR_MODEL,
            ['twitch_username' => $creator],
            'creator_id'
        );
    }
}
