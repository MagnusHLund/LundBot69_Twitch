<?php

namespace LundBot69Api\Controllers;

use Exception;
use LundBot69Api\Models\User;
use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\Constants;

class TwitchController
{
    const CREATOR_MODEL = "Creators";

    public function connectUser($request)
    {
        setcookie("jwt", "", time() - 3600);

        $user = new User($_COOKIE['jwt'] ?? null, $_SESSION["user_refresh_token"] ?? null);
        if (isset($request[0]["code"])) {
            try {
                $user->getUserFromAuthenticationCode($request[0]["code"], Constants::getTwitchRedirectUri());
                if ($user) {
                    $response = Database::read(self::CREATOR_MODEL, ['twitch_username' => $user->getTwitchUsername()], 'twitch_username');
                    $username = $response[0]['creator'];

                    if (!isset($username)) {
                        http_response_code(401);
                        echo json_encode(['error' => 'Username is not registered in the database. ' . $username]);
                        exit;
                    }

                    $user->save();
                    http_response_code(200);
                    exit;
                } else {
                    throw new Exception;
                }
            } catch (Exception $e) {
                http_response_code(400);
                echo json_encode(['error' => 'The twitch authentication code is invalid. ' . $e]);
                exit;
            }
        } else {
            // There is no code parameter, redirect the user to the Twitch authorization URL
            $authUrl = $user->getAuthUrl(Constants::GetTwitchRedirectUri(), Constants::getTwitchScopes());
            header('Location: ' . $authUrl);
        }
    }
}
