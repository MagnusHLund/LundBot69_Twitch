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
        $_SESSION['user_jwt'] = $this->generateUserJWT();
        $_SESSION['user_refresh_token'] = $this->refreshToken;
    }

    public function refresh()
    {
        try {


            $decoded = \Firebase\JWT\JWT::decode($_SESSION['user_jwt'], array("kid" => $this->constants->getKid()));
            $expires = $decoded->exp ?? 0;
            if ($expires < time()) {
                $token = $this->twitchApi->getOauthApi()->refreshToken($this->refreshToken, $this->constants->GetTwitchScopes());
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
            // TODO: Remove this comment $this->revoke();
        }
    }

    public function revoke()
    {
        unset($_SESSION['user_jwt']);
        unset($_SESSION['user_refresh_token']);

        session_destroy();
    }

    public function getAccessToken()
    {
        return $this->accessToken;
    }

    public function getRefreshToken()
    {
        return $this->refreshToken;
    }

    public function generateUserJWT()
    {
        $payload = [
            'iss' => 'LundBot69',
            'sub' => $this->accessToken,
            'iat' => time(),
            'exp' => time() + 86400 // 1 day
        ];
        return \Firebase\JWT\JWT::encode($payload, $this->constants->GetTwitchClientSecret(), 'HS256', $this->constants->getKid());
    }
}
