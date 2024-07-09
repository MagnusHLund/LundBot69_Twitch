<?php

namespace LundBot69Api\Controllers;

use Exception;
use LundBot69Api\Models\User;
use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\Constants;
use LundBot69Api\Utils\MessageManager;

class TwitchController
{
    const CREATOR_MODEL = "Creators";

    private $constants;
    private $database;
    private $messageManager;

    public function __construct()
    {
        $this->constants = Constants::getInstance();
        $this->database = Database::getInstance();
        $this->messageManager = MessageManager::getInstance();

        user::removeUserJwt();
    }

    public function connectUser($request)
    {
        $user = new User(null, $_SESSION["user_refresh_token"] ?? null);

        try {
            $twitchRedirectUrl = $this->constants->getTwitchRedirectUri();
            $user->getUserFromAuthenticationCode($request[0]["code"], $twitchRedirectUrl);

            if ($user) {
                $response = $this->database->read(self::CREATOR_MODEL, ['twitch_username' => $user->getTwitchUsername()], 'twitch_username');
                $username = $response[0]['twitch_username'];

                if (!isset($username)) {
                    $responseMessage = "Twitch username is not registered in the database.";
                    $logMessage = "$responseMessage. Username: $username";

                    $this->messageManager->sendError($responseMessage, 401, $logMessage);
                }

                $this->messageManager->sendSuccess("", 204);
            } else {
                throw new Exception;
            }
        } catch (Exception $e) {
            $responseMessage = "An error occurred while signing in.";
            $logMessage = "$responseMessage. $e";

            $this->messageManager->sendError($responseMessage, 400, $logMessage);
        }
    }
}
