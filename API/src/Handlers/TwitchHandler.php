<?php

namespace LundBot69Api\Handlers;

require_once __DIR__ . '/../../vendor/autoload.php';

use Exception;
use PDOException;
use LundBot69Api\Models\User;
use LundBot69Api\Utils\Constants;

class TwitchHandler
{
    private $constants;

    public function __construct()
    {
        $this->constants = new Constants;
    }

    public function connectUser($request)
    {
        $user = new User(($_SESSION['user_jwt']), ($_SESSION['user_refresh_token']));

        if (isset($request[0]["code"])) {
            try {
                $user = new User(null, null);
                $user = $user->getUserFromAuthenticationCode($request[0]["code"], $this->constants->getTwitchRedirectUri());
                if ($user) {

                    // TODO: Setup an ORM for database communication. Check if the user exists in the database, if not then no access. 

                    if (false /* User does not exist in database */) {
                        http_response_code(401);
                        echo json_encode(['error' => 'You picked the wrong user, fool!']);
                        exit;
                    }

                    $user->save();
                    header('Location: ' . $this->constants->getTwitchRedirectUri());
                } else {
                    throw new Exception;
                }
            } catch (Exception) {
                http_response_code(400);
                echo json_encode(['error' => 'Your code is bad :C']);
                exit;
            }
        } else {
            // There is no code parameter, redirect the user to the Twitch authorization URL
            $authUrl = $user->getAuthUrl($this->constants->GetTwitchRedirectUri(), $this->constants->getTwitchScopes());
            header('Location: ' . $authUrl);
        }
    }
}
