<?php

namespace LundBot69Api\Handlers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\UserUtils;

class GiveawayHandler
{
    private const GIVEAWAY_MODEL = "Giveaways";

    public function pickGiveawayWinner()
    {
        $creatorId = UserUtils::getCreatorId();

        Database::read(
            $this::GIVEAWAY_MODEL,
            ['fk_creator_id' => $creatorId],
            "participant"
        );

        echo ["winner" => Database::readRandomRow(
            $this::GIVEAWAY_MODEL,
            ['fk_creator_id' => $creatorId],
            "participant"
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
