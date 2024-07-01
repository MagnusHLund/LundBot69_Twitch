<?php

namespace LundBot69Api\Middleware;

use Exception;

class AuthenticationMiddleware
{
    public static function handle($path)
    {
        try {
            if (!strpos($path, "twitch/connectUser") && !isset($_COOKIE['user_jwt'])) {
                throw new exception("User is not logged in!");
            }
            if()
        } catch (Exception $e) {
            http_response_code(401);
            echo json_encode(["error" => "User is not logged in!"]);
            exit;
        }
    }
}
