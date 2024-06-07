<?php

namespace LundBot69Api\Handlers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\UserUtils;

class PointsHandler
{
    const POINTS_MODEL = "Points";

    public function getPointsLeaderboard($from)
    {
        $creatorId = UserUtils::getCreatorId();

        $leaderboard = Database::read(
            $this::POINTS_MODEL,
            ['creator_id' => $creatorId],
            ['twitch_username', 'points']
        );

        $from->send(json_encode(['leaderboard' => $leaderboard]));
    }

    public function modifyUsersPoints()
    {
    }

    public function wipeAllPoints()
    {
    }

    public function removeUser()
    {
    }

    public function addPoints()
    {
    }
}
