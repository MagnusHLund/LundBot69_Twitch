<?php

namespace LundBot69Api\Middleware;

use LundBot69Api\Utils\Database;

class RateLimitingMiddleware
{
    const COOLDOWN_TIME = 10; // Seconds

    public function handle()
    {
        $ipAddress = $_SERVER["HTTP_X_FORWARDED_FOR"] ?? $_SERVER['REMOTE_ADDR'];

        $ipExists = Database::read(
            "RateLimiting",
            ['IpAddress' => $ipAddress],
            'IpAddress'
        );
        $currentTime = time();
        if ($ipExists === null) {
            Database::create(
                "RateLimiting",
                [
                    'IpAddress' => $ipAddress,
                    'LastAttemptTime' => $currentTime
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
            ['IpAddress' => $ipAddress],
            ['LastAttemptTime' => $currentTime]
        );

        if ($currentTime < $lastAttempt + $this::COOLDOWN_TIME) {
            http_response_code(429);
            echo ["Error" => "Too many requests!"];
            exit;
        }
    }
}
