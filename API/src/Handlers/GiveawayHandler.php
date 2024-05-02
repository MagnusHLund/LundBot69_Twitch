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

        echo ["winner" => Database::readRandomRow(
            $this::GIVEAWAY_MODEL,
            ['creator_id' => $creatorId],
            "participant"
        )['participant']];
    }

    public function resetGiveawayParticipants()
    {
    }

    // Uses websocket
    public function getGiveawayParticipants($from)
    {
        $creatorId = UserUtils::getCreatorId();

        $participants = Database::read(
            $this::GIVEAWAY_MODEL,
            ['creator_id' => $creatorId],
            "participant"
        )['participant'];

        $from->send(json_encode(['type' => 'giveawayParticipants', 'data' => $participants]));
    }

    public function addGiveawayParticipants()
    {
    }
}
