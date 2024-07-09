<?php

namespace LundBot69Api\Middleware;

use Exception;
use LundBot69Api\Utils\Authentication;

class AuthenticationMiddleware
{
    public static function handle($path)
    {
        try {
            $authentication = Authentication::getInstance();

            if ($path != "/api/twitch/connectUser") {
                if (!isset($_COOKIE['jwt'])) {
                    throw new Exception("User is not logged in!");
                }

                if (!(bool) $authentication->decodeJwt()) {
                    throw new Exception("User is not real");
                }
            }
        } catch (Exception $e) {
            // Refactor this to use messageManager
            http_response_code(401);
            echo json_encode(["error" => "User is not logged in!"]);
            exit;
        }
    }
}
