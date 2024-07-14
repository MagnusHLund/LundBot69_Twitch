<?php

namespace LundBot69Api\Controllers;

use Exception;
use LundBot69Api\Models\Creator;
use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\Constants;
use LundBot69Api\Utils\MessageManager;
use LundBot69Api\Utils\TwitchUtils;

class TwitchController
{
    const CREATOR_MODEL = "Creators";

    private $database;
    private $twitchUtils;
    private $messageManager;

    public function __construct()
    {
        $this->database = Database::getInstance();
        $this->twitchUtils = TwitchUtils::getInstance();
        $this->messageManager = MessageManager::getInstance();
    }

    public function connectUser($request)
    {
        $user = new Creator(null, null);

        try {
            $authenticationToken = $request[0]['code'];
            $twitchTokens = $user->loginCreator($authenticationToken);

            $accessToken = $twitchTokens['accessToken'];
            $twitchUsername = $this->twitchUtils->getUsernameFromAccessToken($accessToken);

            if ($user) {
                $response = $this->database->read(self::CREATOR_MODEL, ['twitch_username' => $twitchUsername], 'twitch_username');
                $databaseUsername = $response[0]['twitch_username'];

                if (!isset($databaseUsername)) {
                    $responseMessage = "Twitch username is not registered in the database.";
                    $logMessage = "$responseMessage. Username: $twitchUsername";

                    $this->messageManager->sendMessage($responseMessage, 401, $logMessage);
                }

                $this->messageManager->sendMessage("", 204);
                exit;
            } else {
                throw new Exception;
            }
        } catch (Exception $e) {
            $responseMessage = "An error occurred while signing in.";
            $logMessage = "$responseMessage. $e";

            $this->messageManager->sendMessage($responseMessage, 400, $logMessage);
        }
    }
}
