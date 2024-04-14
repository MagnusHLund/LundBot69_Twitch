<?php

namespace LundBot69Api\Handlers;

use LundBot69Api\Handlers\TwitchHandler;
use LundBot69Api\Utils\Database;

class GiveawayHandler
{
    private const GIVEAWAY_MODEL = "Giveaways";

    public function pickGiveawayWinner()
    {
        $creatorId = TwitchHandler::getCreatorId();

        Database::read(
            $this::GIVEAWAY_MODEL,
            ['CreatorID' => $creatorId],
            "Participants"
        );

        echo ["winner" => Database::readRandomRow(
            $this::GIVEAWAY_MODEL,
            ['CreatorID' => $creatorId],
            "Participants"
        )];
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
