<?php

namespace LundBot69Api\Middleware;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\MessageManager;

class RateLimitingMiddleware
{
    const COOLDOWN_TIME = 10; // Seconds

    private static $instance = null;

    private $database;
    private $messageManager;

    private function __construct()
    {
        $this->database = Database::getInstance();
        $this->messageManager = MessageManager::getInstance();
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new RateLimitingMiddleware();
        }
        return self::$instance;
    }


    public function validateRateLimiting($path)
    {
        if (!strpos($path, "/api/twitch/connectUser")) {
            return;
        }

        $ipAddress = $_SERVER["HTTP_X_FORWARDED_FOR"] ?? $_SERVER['REMOTE_ADDR'];

        $ipExists = $this->database->read(
            "RateLimiting",
            ['ip_address' => $ipAddress],
            'ip_address'
        );

        $currentTime = time();

        if ($ipExists === null) {
            $this->database->create(
                "RateLimiting",
                [
                    'ip_address' => $ipAddress,
                    'last_attempted_time' => $currentTime
                ]
            );
            return;
        }

        $lastAttempt = $this->database->read(
            "RateLimiting",
            ['ip_address' => $ipAddress],
            'last_attempted_time'
        )['last_attempted_time'] ?? 0;

        $this->database->update(
            "RateLimiting",
            ['ip_address' => $ipAddress],
            ['last_attempted_time' => $currentTime]
        );

        if ($currentTime < $lastAttempt + self::COOLDOWN_TIME) {
            $responseMessage = "Too many requests";
            $this->messageManager->sendMessage($responseMessage, 429);
            exit;
        }
    }
}
