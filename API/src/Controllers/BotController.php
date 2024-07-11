<?php

namespace LundBot69Api\Controllers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\MessageManager;

// The BotController is responsible for handing bot-only commands.
class BotController
{
    const CREATOR_MODEL = "Creators";

    private $database;
    private $messageManager;

    public function __construct()
    {
        $this->database = Database::getInstance();
        $this->messageManager = MessageManager::getInstance();
    }

    public function getChannels()
    {
        $result = $this->database->read(self::CREATOR_MODEL, [], 'twitch_username');

        $this->messageManager->sendMessage($result);
    }
}
