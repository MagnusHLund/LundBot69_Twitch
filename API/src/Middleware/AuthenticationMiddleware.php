<?php

namespace LundBot69Api\Middleware;

class AuthenticationMiddleware
{
    public static function handle($path)
    {
        if (!strpos($path, "twitch/connectUser")) {
            if (!isset($_SESSION['user_jwt'])) {
                http_response_code(401);
                echo json_encode(["error" => "User is not logged in!"
                    . ($_SERVER["HTTP_X_FORWARDED_FOR"] ?? $_SERVER['REMOTE_ADDR'])]);
                exit;
            }
        }
    }
}
