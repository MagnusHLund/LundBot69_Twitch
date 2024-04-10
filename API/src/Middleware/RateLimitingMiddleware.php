<?php

namespace LundBot69Api\Middleware;

use LundBot69Api\Utils\Database;

class RateLimitingMiddleware
{
    public function check()
    {
        $currentTime = time();
        if (Database::read(
            "RateLimiting",
            ['IpAddress' => $_SERVER["HTTP_X_FORWARDED_FOR"] ?? $_SERVER['REMOTE_ADDR']],
            'IpAddress'
        ) === null) {
            Database::create(
                "RateLimiting",
                [
                    'IpAddress' => $_SERVER["HTTP_X_FORWARDED_FOR"] ?? $_SERVER['REMOTE_ADDR'],
                    'LastAttemptTime' => $currentTime
                ]
            );
            return true;
        }

        // TODO: Finish this

        return false;
    }
}
