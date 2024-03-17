<?php

namespace LundBot69Api\Models;

use LundBot69Api\Utils\Constants;
use TwitchApi\TwitchApi;
use TwitchApi\HelixGuzzleClient;

class User
{
    private $accessToken;
    private $refreshToken;
    private $twitchApi;
    private $constants;

    public function __construct($accessToken, $refreshToken)
    {
        $this->constants = new constants;

        $helixGuzzleClient = new HelixGuzzleClient($this->constants->GetTwitchClientID());

        $this->twitchApi = new TwitchApi(
            $helixGuzzleClient,
            $this->constants->GetTwitchClientID(),
            $this->constants->GetTwitchClientSecret(),
        );

        $this->accessToken = $accessToken;
        $this->refreshToken = $refreshToken;
    }

    public function getAuthUrl($redirectUri, $scope = "")
    {
        return $this->twitchApi->getOauthApi()->getAuthUrl($redirectUri, 'code', $scope);
    }

    public function getUserFromAuthenticationCode($code, $redirectUri)
    {
        $token = $this->twitchApi->getOauthApi()->getUserAccessToken($code, $redirectUri);
        $data = json_decode($token->getBody()->getContents());
        $accessToken = $data->access_token ?? null;
        $refreshToken = $data->refresh_token ?? null;
        if ($accessToken && $refreshToken) {
            return new User($accessToken, $refreshToken);
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
        try {
            $decoded = \Firebase\JWT\JWT::decode($this->accessToken, $this->constants->GetTwitchClientSecret()); // TODO: Add algorithm
            $expires = $decoded->exp ?? 0;
            if ($expires < time()) {
                $token = $this->twitchApi->getOauthApi()->refreshToken($this->refreshToken); // TODO: 2nd argument is twitch scope. Use it later.
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
        // TODO: revokeUserAccessToken() does not exist anymore. Use validateAccessToken and remove it from session storage if invalid
        $this->twitchApi->getOauthApi()->validateAccessToken($this->accessToken);

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
