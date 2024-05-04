<?php

namespace LundBot69Api\Handlers;

use LundBot69Api\Utils\Database;

// The BotHandler is responsible for handing bot-only commands.
class BotHandler
{
    const CREATOR_MODEL = "Creators";

    public function getAllRegisteredChannels()
    {
        $result = Database::read(self::CREATOR_MODEL, [], 'twitch_username');

        echo json_encode(['error' => $result]);
    }
}
