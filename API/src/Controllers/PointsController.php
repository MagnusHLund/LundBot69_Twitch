<?php

namespace LundBot69Api\Controllers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\UserUtils;
use LundBot69Api\Utils\MessageManager;

class PointsController
{
    const POINTS_MODEL = "Points";

    private $database;
    private $messageManager;

    public function __construct()
    {
        $this->database = Database::getInstance();
        $this->messageManager = MessageManager::getInstance();
    }

    public function getPointsLeaderboard()
    {
        $creatorId = UserUtils::getCreatorId();

        $leaderboard = $this->database->read(
            $this::POINTS_MODEL,
            ['creator_id' => $creatorId],
            ['twitch_username', 'points']
        );

        $this->messageManager->sendMessage($leaderboard);
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
}
