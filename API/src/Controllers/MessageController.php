<?php

namespace LundBot69Api\Controllers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\MessageManager;

class MessageController
{
    private $database;
    private $messageManager;

    public function __construct()
    {
        $this->database = Database::getInstance();
        $this->messageManager = MessageManager::getInstance();
    }

    public function addMessage()
    {
    }

    public function getMessageByName()
    {
    }

    public function editMessage()
    {
    }

    public function deleteMessage()
    {
    }
}
