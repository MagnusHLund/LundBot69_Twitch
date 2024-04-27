<?php

namespace LundBot69Api\Handlers;

require_once __DIR__ . '/../../vendor/autoload.php';

use Exception;
use LundBot69Api\Models\User;
use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\Constants;

class TwitchHandler
{
    public function connectUser($request)
    {
        $user = new User($_SESSION["user_jwt"] ?? null, $_SESSION["user_refresh_token"] ?? null);
        if (isset($request[0]["code"])) {
            try {
                $user->getUserFromAuthenticationCode($request[0]["code"], Constants::getTwitchRedirectUri());
                if ($user) {
                    $username = Database::read("Creators", ['Username' => $user->getTwitchUsername()], 'Username');

                    if (!isset($username)) {
                        http_response_code(401);
                        echo json_encode(['error' => 'You picked the wrong user, fool!']);
                        exit;
                    }

                    $user->save();
                    $_SESSION['token'] = bin2hex(random_bytes(32));
                    echo json_encode(["token" => $_SESSION['token']]);
                    http_response_code(200);
                    exit;
                } else {
                    throw new Exception;
                }
            } catch (Exception) {
                echo json_encode(['error' => 'Your code is bad :C']);
                http_response_code(400);
                exit;
            }
        } else {
            // There is no code parameter, redirect the user to the Twitch authorization URL
            $authUrl = $user->getAuthUrl(Constants::GetTwitchRedirectUri(), Constants::getTwitchScopes());
            header('Location: ' . $authUrl);
        }
    }

    public static function getCreatorId($creator = null)
    {
        if (!$creator) {
            $user = new user($_SESSION["user_jwt"], $_SESSION["user_refresh_token"]);
            $creator = $user->getTwitchUsername();
        }

        return Database::read(
            "Creators",
            ['Username' => $creator],
            'CreatorId'
        );
    }
    
    public 
}
