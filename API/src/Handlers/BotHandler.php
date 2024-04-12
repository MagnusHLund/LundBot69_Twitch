<?php

namespace LundBot69Api\Handlers;

use lundbot69api\Utils\Database;

// The BotHandler is responsible for handing bot-only commands.
class BotHandler
{
    public function getChannels()
    {
        Database::read("Creators", [], 'Username');
    }
}
