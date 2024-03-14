<?php

namespace LundBot69Api;

use TwitchApi\TwitchApi;

define('TWITCH_CLIENT_ID', $_ENV['TWITCH_CLIENT_ID']);
define('TWITCH_CLIENT_SECRET', $_ENV['TWITCH_CLIENT_SECRET']);
$helixGuzzleClient = new \TwitchApi\HelixGuzzleClient(TWITCH_CLIENT_ID);

class User
{
    private $accessToken;
    private $refreshToken;
    private $twitchApi;

    public function __construct($accessToken, $refreshToken, $twitchApi)
    {
        $this->accessToken = $accessToken;
        $this->refreshToken = $refreshToken;
        $this->twitchApi = $twitchApi;
    }

    public static function getAuthUrl($redirectUri, $scope = "", $twitchApi)
    {/*
        $test = $this->twitchApi->getOauthApi();
        $test2 = $test->getAuthUrl($redirectUri, 'code', $scope);
        return $test2; */
        return $twitchApi->getOauthApi()->getAuthUrl($redirectUri, 'code', $scope);
    }

    public static function getUserFromAuthenticationCode($code, $redirectUri, $twitchApi)
    {
        $token = $twitchApi->getOauthApi()->getUserAccessToken($code, $redirectUri, $twitchApi);
        $data = json_decode($token->getBody()->getContents());
        $accessToken = $data->access_token ?? null;
        $refreshToken = $data->refresh_token ?? null;
        if ($accessToken && $refreshToken) {
            return new User($accessToken, $refreshToken, $twitchApi);
        } else {
            return null;
        }
    }

    public function save()
    {
        // TODO: Take another look at this later
        $_SESSION['user_access_token'] = $this->accessToken;
        $_SESSION['user_refresh_token'] = $this->refreshToken;
    }

    public function refresh()
    {
        global $twitchApi;
        try {
            $decoded = \Firebase\JWT\JWT::decode($this->accessToken, TWITCH_CLIENT_SECRET); // TODO: Add algorithm
            $expires = $decoded->exp ?? 0;
            if ($expires < time()) {
                $token = $twitchApi->getOauthApi()->refreshToken($this->refreshToken); // TODO: 2nd argument is twitch scope. Use it later.
                $data = json_decode($token->getBody()->getContents());
                $this->accessToken = $data->access_token ?? null;
                $this->refreshToken = $data->refresh_token ?? null;
                if ($this->accessToken && $this->refreshToken) {
                    $this->save();
                } else {
                    $this->revoke();
                }
            }
        } catch (\Exception $e) {
            // The access token is invalid, revoke the tokens and log out the user
            $this->revoke();
        }
    }

    public function revoke()
    {
        global $twitchApi;
        // TODO: revokeUserAccessToken() does not exist anymore. Use validateAccessToken and remove it from session storage if invalid
        $twitchApi->getOauthApi()->revokeUserAccessToken($this->accessToken);
        $twitchApi->getOauthApi()->revokeUserAccessToken($this->refreshToken);

        // TODO: Take another look at this later
        unset($_SESSION['user_access_token']);
        unset($_SESSION['user_refresh_token']);
    }

    public function getAccessToken()
    {
        return $this->accessToken;
    }

    public function getRefreshToken()
    {
        return $this->refreshToken;
    }
}
