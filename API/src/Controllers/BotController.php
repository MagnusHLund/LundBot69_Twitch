<?php

namespace LundBot69Api\Controllers;

use LundBot69Api\Utils\Database;

// The BotController is responsible for handing bot-only commands.
class BotController
{
    const CREATOR_MODEL = "Creators";

    public function getAllRegisteredChannels()
    {
        $result = Database::read(self::CREATOR_MODEL, [], 'twitch_username');

        echo json_encode(['result' => $result]);
    }
}
