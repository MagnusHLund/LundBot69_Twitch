<?php

namespace LundBot69Api\Middleware;

use LundBot69Api\Utils\Database;

class RateLimitingMiddleware
{
    const COOLDOWN_TIME = 10; // Seconds

    public static function handle()
    {
        $ipAddress = $_SERVER["HTTP_X_FORWARDED_FOR"] ?? $_SERVER['REMOTE_ADDR'];

        $ipExists = Database::read(
            "RateLimiting",
            ['ip_address' => $ipAddress],
            'ip_address'
        );
        $currentTime = time();
        if ($ipExists === null) {
            Database::create(
                "RateLimiting",
                [
                    'ip_address' => $ipAddress,
                    'last_attempted_time' => $currentTime
                ]
            );
            return;
        }

        $lastAttempt = Database::read(
            "RateLimiting",
            ['IpAddress' => $ipAddress],
            'LastAttemptTime'
        );

        Database::update(
            "RateLimiting",
            ['ip_address' => $ipAddress],
            ['last_attempted_time' => $currentTime]
        );

        if ($currentTime < $lastAttempt + self::COOLDOWN_TIME) {
            http_response_code(429);
            echo ["Error" => "Too many requests!"];
            exit;
        }
    }
}