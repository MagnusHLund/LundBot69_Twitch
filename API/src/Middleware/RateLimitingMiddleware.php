<?php

namespace LundBot69Api\Middleware;

use LundBot69Api\Utils\Database;

class RateLimitingMiddleware
{
    const COOLDOWN_TIME = 10; // Seconds

    public static function handle($path)
    {
        $database = Database::getInstance();

        if (!strpos($path, "/api/twitch/connectUser")) {
            return;
        }

        $ipAddress = $_SERVER["HTTP_X_FORWARDED_FOR"] ?? $_SERVER['REMOTE_ADDR'];

        $ipExists = $database->read(
            "RateLimiting",
            ['ip_address' => $ipAddress],
            'ip_address'
        );

        $currentTime = time();

        if ($ipExists === null) {
            $database->create(
                "RateLimiting",
                [
                    'ip_address' => $ipAddress,
                    'last_attempted_time' => $currentTime
                ]
            );
            return;
        }

        $lastAttempt = $database->read(
            "RateLimiting",
            ['ip_address' => $ipAddress],
            'last_attempted_time'
        )['last_attempted_time'] ?? 0;

        $database->update(
            "RateLimiting",
            ['ip_address' => $ipAddress],
            ['last_attempted_time' => $currentTime]
        );

        if ($currentTime < $lastAttempt + self::COOLDOWN_TIME) {
            http_response_code(429);
            echo json_encode(["Error" => "Too many requests!"]);
            exit;
        }
    }
}
