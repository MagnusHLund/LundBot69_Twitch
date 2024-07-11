<?php

namespace LundBot69Api\Controllers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\UserUtils;
use LundBot69Api\Utils\MessageManager;

class GiveawayController
{
    private const GIVEAWAY_MODEL = "Giveaways";

    private $database;
    private $messageManager;

    public function __construct()
    {
        $this->database = Database::getInstance();
        $this->messageManager = MessageManager::getInstance();
    }

    public function getGiveawayWinner()
    {
        $creatorId = UserUtils::getCreatorId();

        $result = $this->database->read(
            $this::GIVEAWAY_MODEL,
            ['creator_id' => $creatorId],
            "participant",
            1,
            null,
            true
        );

        $this->messageManager->sendMessage($result);
    }

    public function resetGiveawayParticipants()
    {
    }

    public function getGiveawayParticipants()
    {
        $creatorId = UserUtils::getCreatorId();

        $participants = $this->database->read(
            $this::GIVEAWAY_MODEL,
            ['creator_id' => $creatorId],
            "participant"
        )['participant'];

        $this->messageManager->sendMessage($participants);
    }

    public function addGiveawayParticipants()
    {
    }
}
