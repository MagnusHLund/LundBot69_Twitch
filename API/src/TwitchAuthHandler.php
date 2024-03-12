<?php

require_once 'LoginHandler.php';

session_start();

define('DB_HOST', $_ENV['DB_HOST']);
define('DB_USER', $_ENV['DB_USER']);
define('DB_PASSWORD', $_ENV['DB_PASSWORD']);
define('DB_DATABASE', $_ENV['DB_DATABASE']);

define('REDIRECT_URI', $_ENV['TWITCH_REDIRECT_URI']);
define('TWITCH_SCOPES', [
    'moderator:read:followers',
    'moderator:read:chatters',
    'channel:read:vips',
    'channel:read:subscriptions',
    'channel:read:goals',
]);

// TODO: Rewrite this GPT mess
if (isset($_SESSION['user_access_token']) && isset($_SESSION['user_refresh_token'])) {
    $user = new User($_SESSION['user_access_token'], $_SESSION['user_refresh_token']);
    $user->refresh();
    $accessToken = $user->getAccessToken();
    try {
        $db = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_DATABASE, DB_USER, DB_PASSWORD);
        $stmt = $db->prepare('SELECT * FROM YOUR_TABLE WHERE access_token = ?');
        $stmt->execute([$accessToken]);
        $data = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($data) {
            // The user has data in the database, return it as JSON
            header('Content-Type: application/json');
            echo json_encode($data);
        } else {
            // The user has no data in the database, return an error message
            header('Content-Type: application/json');
            echo json_encode(['error' => 'No data found for this user']);
        }
    } catch (PDOException $e) {
        // There was an error connecting to the database, return an error message
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    }
} else {
    // The user is not logged in, check if there is a code parameter in the URL
    if (isset($_GET['code'])) {
        // There is a code parameter, exchange it for an access token and a refresh token
        $user = User::getUserFromAuthenticationCode($_GET['code'], REDIRECT_URI);
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
        $authUrl = User::getAuthUrl(REDIRECT_URI, TWITCH_SCOPES);
        header('Location: ' . $authUrl);
    }
}
