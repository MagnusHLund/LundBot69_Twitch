<?php

namespace LundBot69Api\Controllers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\MessageManager;

class SettingsController
{
    const SETTINGS_MODEL = "Settings";

    private $database;
    private $messageManager;

    public function __construct()
    {
        $this->database = Database::getInstance();
        $this->messageManager = MessageManager::getInstance();
    }

    public function getSettingActivityState()
    {
    }

    public function setBotActivityState()
    {
    }

    public function setShoutOutActivityState()
    {
    }

    public function setAutoPinnedMessage()
    {
    }
}
