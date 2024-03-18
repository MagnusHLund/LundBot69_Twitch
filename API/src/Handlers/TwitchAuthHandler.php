<?php

namespace LundBot69Api\Handlers;

require_once __DIR__ . '/../../vendor/autoload.php';

use PDOException;
use LundBot69Api\Models\User;
use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\Constants;

class TwitchAuthHandler
{
    private $constants;

    public function __construct()
    {
        session_start();
        $this->constants = new Constants;
    }

    public function connectUser()
    {

        $user = new User(($_SESSION['user_access_token']), ($_SESSION['user_refresh_token']));

        $test_jwt = $_SESSION['user_jwt'];
        $test_refresh = $_SESSION['user_refresh_token'];

        if (isset($_SESSION['user_jwt']) && isset($_SESSION['user_refresh_token'])) {
            $user->refresh();
            $accessToken = $user->getAccessToken();
            try {
                $db = new Database;
                $data = $db->query('SELECT * FROM creators WHERE AccessToken = ? LIMIT 1', $accessToken); // This query makes no sense. Get the username of the twitch channel and query on that.
                if ($data) {
                    header('Content-Type: application/json');
                    echo json_encode($data);
                } else {
                    header('Content-Type: application/json');
                    echo json_encode(['error' => 'No data found for this user']);
                }
            } catch (PDOException $e) {
                header('Content-Type: application/json');
                echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
            }
        } else {
            if (isset($_GET['code'])) {
                $user = $user->getUserFromAuthenticationCode($_GET['code'], $this->constants->GetTwitchRedirectUri());
                if ($user) {
                    $user->save();
                    header('Location: ' . $this->constants->GetTwitchRedirectUri());
                } else {
                    // The exchange failed, return an error message
                    header('Content-Type: application/json');
                    echo json_encode(['error' => 'Invalid code']);
                }
            } else {
                // There is no code parameter, redirect the user to the Twitch authorization URL
                $authUrl = $user->getAuthUrl($this->constants->GetTwitchRedirectUri(), $this->constants->GetTwitchScopes());
                header('Location: ' . $authUrl);
            }
        }
    }
}
