<?php

namespace LundBot69Api\Handlers;

use lundbot69api\Utils\Database;

// The BotHandler is responsible for handing bot-only commands.
class BotHandler
{
    const CREATOR_MODEL = "Creators";

    public function getAllRegisteredChannels()
    {
        Database::read(self::CREATOR_MODEL, [], 'twitch_username');
    }
}
