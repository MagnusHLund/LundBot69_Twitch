<?php

namespace LundBot69Api\Handlers;

use LundBot69Api\Handlers\TwitchHandler;

class GiveawayHandler
{
    public function pickGiveawayWinner()
    {
        TwitchHandler::getUser();
    }

    public function resetGiveawayParticipants()
    {
    }

    // Uses websocket
    public function getGiveawayParticipants()
    {
    }

    public function addGiveawayParticipants()
    {
    }
}
