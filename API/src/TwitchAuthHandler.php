<?php

namespace LundBot69Api;

use PDOException;

require_once 'User.php';

define('REDIRECT_URI', $_ENV['TWITCH_REDIRECT_URI']);

define('TWITCH_SCOPES', implode(' ', [
    'moderator:read:followers',
    'moderator:read:chatters',
    'channel:read:vips',
    'channel:read:subscriptions',
    'channel:read:goals',
]));

class TwitchAuthHandler
{
    public function __construct()
    {
        session_start();
    }

    public function connectUser()
    {
        $helixGuzzleClient = new \TwitchApi\HelixGuzzleClient(TWITCH_CLIENT_ID);

        $twitchApi = new \TwitchApi\TwitchApi(
            $helixGuzzleClient,
            TWITCH_CLIENT_ID,
            TWITCH_CLIENT_SECRET,
        );

        if (isset($_SESSION['user_access_token']) && isset($_SESSION['user_refresh_token'])) {
            $user = new User($_SESSION['user_access_token'], $_SESSION['user_refresh_token'], $twitchApi);
            $user->refresh();
            $accessToken = $user->getAccessToken();
            try {
                $db = new Database;
                $data = $db->query('SELECT * FROM creators WHERE AccessToken = ? LIMIT 1', $accessToken);
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
            // The user is not logged in, check if there is a code parameter in the URL
            if (isset($_GET['code'])) {
                // There is a code parameter, exchange it for an access token and a refresh token
                $user = User::getUserFromAuthenticationCode($_GET['code'], REDIRECT_URI, $twitchApi);
                if ($user) {
                    // The exchange was successful, save the user and redirect to the API
                    $user->save();
                    header('Location: ' . REDIRECT_URI);
                } else {
                    // The exchange failed, return an error message
                    header('Content-Type: application/json');
                    echo json_encode(['error' => 'Invalid code']);
                }
            } else {
                // There is no code parameter, redirect the user to the Twitch authorization URL
                $authUrl = User::getAuthUrl(REDIRECT_URI, TWITCH_SCOPES, $twitchApi);
                header('Location: ' . $authUrl);
            }
        }
    }
}
