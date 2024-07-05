<?php

namespace LundBot69Api\Controllers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\UserUtils;

class GiveawayController
{
    private const GIVEAWAY_MODEL = "Giveaways";

    public function getGiveawayWinner()
    {
        $creatorId = UserUtils::getCreatorId();

        echo ["winner" => Database::read(
            $this::GIVEAWAY_MODEL,
            ['creator_id' => $creatorId],
            "participant",
            1,
            null,
            true
        )];
    }

    public function resetGiveawayParticipants()
    {
    }

    public function getGiveawayParticipants($from)
    {
        $creatorId = UserUtils::getCreatorId();

        $participants = Database::read(
            $this::GIVEAWAY_MODEL,
            ['creator_id' => $creatorId],
            "participant"
        )['participant'];

        $from->send(json_encode(['participants' => $participants]));
    }

    public function addGiveawayParticipants()
    {
    }
}
