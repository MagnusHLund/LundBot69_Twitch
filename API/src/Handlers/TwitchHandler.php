<?php

namespace LundBot69Api\Handlers;

require_once __DIR__ . '/../../vendor/autoload.php';

use PDOException;
use LundBot69Api\Models\User;
use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\Constants;

class TwitchHandler
{
    private $constants;

    public function __construct()
    {
        $this->constants = new Constants;
    }

    public function connectUser()
    {

        $user = new User(($_SESSION['user_jwt']), ($_SESSION['user_refresh_token']));

        $test_jwt = $_SESSION['user_jwt'];
        $test_refresh = $_SESSION['user_refresh_token'];

        if (isset($_SESSION['user_jwt']) && isset($_SESSION['user_refresh_token'])) {
            $user->refresh();
            $username = $user->getTwitchUsername();
            try {
                $db = new Database;
                $data = $db->query('SELECT * FROM creators WHERE Username = ? LIMIT 1', [$username]);
                if ($data) {
                    header('Content-Type: application/json');
                    echo json_encode("User exists!");
                } else {
                    header('Content-Type: application/json');
                    echo json_encode(['error' => 'No data found for this user']);
                    $user->revoke();
                }
            } catch (PDOException $e) {
                header('Content-Type: application/json');
                echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
            }
        } else {
            if (isset($_GET['code'])) {
                $user = $user->getUserFromAuthenticationCode($_GET['code'], $this->constants->getTwitchRedirectUri());
                if ($user) {
                    $user->save();
                    header('Location: ' . $this->constants->getTwitchRedirectUri());
                } else {
                    // The exchange failed, return an error message
                    header('Content-Type: application/json');
                    echo json_encode(['error' => 'Invalid code']);
                }
            } else {
                // There is no code parameter, redirect the user to the Twitch authorization URL
                $authUrl = $user->getAuthUrl($this->constants->GetTwitchRedirectUri(), $this->constants->getTwitchScopes());
                header('Location: ' . $authUrl);
            }
        }
    }
}
