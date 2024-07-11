<?php

namespace LundBot69Api\Middleware;

use Exception;
use LundBot69Api\Utils\Authentication;
use LundBot69Api\Utils\MessageManager;

class AuthenticationMiddleware
{
    private static $instance = null;

    private $authentication;
    private $messageManager;

    private function __construct()
    {
        $this->authentication = Authentication::getInstance();
        $this->messageManager = MessageManager::getInstance();
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new AuthenticationMiddleware();
        }
        return self::$instance;
    }

    public function validateAuthentication($path)
    {
        try {
            if ($path != "/api/twitch/connectUser") {
                if (!isset($_COOKIE['jwt'])) {
                    throw new Exception("User is not logged in!");
                }

                if (!(bool) $this->authentication->decodeJwt()) {
                    throw new Exception("User is not real");
                }
            }
        } catch (Exception $e) {
            $responseMessage = "User is not logged in!";
            $this->messageManager->sendMessage($responseMessage, 401, $e->getMessage());
            exit;
        }
    }
}
