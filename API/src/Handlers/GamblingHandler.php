<?php

namespace LundBot69Api\Handlers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\UserUtils;

class GamblingHandler
{
    const GAMBLING_MODEL = "Points";

    public function __construct()
    {
    }

    // Uses websocket
    public function getGamblers($from)
    {
        $creatorId = UserUtils::getCreatorId();

        $gamblers = Database::read(
            $this::GAMBLING_MODEL,
            ['creator_id' => $creatorId],
            ['twitch_username', 'points']
        );

        $from->send(json_encode(['type' => 'pointsLeaderboard', 'data' => $gamblers]));
    }

    public function modifyGamblerPoints()
    {
    }

    public function wipeGamblerPoints()
    {
    }

    public function deleteGambler()
    {
    }

    public function createGambler()
    {
    }
}
