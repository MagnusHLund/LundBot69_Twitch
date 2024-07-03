<?php

namespace LundBot69Api\Controllers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\UserUtils;

class PointsController
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

    public function wipeEveryonesPoints()
    {
    }

    public function wipeUserPoints()
    {
    }

    public function addPoints()
    {
    }
}
