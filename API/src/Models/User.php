<?php

namespace LundBot69Api\Models;

use LundBot69Api\Utils\Constants;
use TwitchApi\HelixGuzzleClient;
use LundBot69Api\Utils\Database;
use TwitchApi\TwitchApi;

class User
{
    const CREATOR_MODEL = "Creators";

    private $accessToken;
    private $refreshToken;
    private $twitchApi;

    public function __construct($accessToken, $refreshToken)
    {
        $helixGuzzleClient = new HelixGuzzleClient(Constants::getTwitchClientID());

        $this->twitchApi = new TwitchApi(
            $helixGuzzleClient,
            Constants::getTwitchClientID(),
            Constants::getTwitchClientSecret(),
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
            $this->accessToken = $accessToken;
            $this->refreshToken = $refreshToken;
            $this->save();
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
            $decoded = $this->decodeJwt();
            $expires = $decoded->exp ?? 0;
            if ($expires < time()) {
                $token = $this->twitchApi->getOauthApi()->refreshToken(
                    $this->refreshToken,
                    Constants::GetTwitchScopes()
                );
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
            $this->revoke();
        }
    }

    private function decodeJwt()
    {
        $keyArray = new \Firebase\JWT\Key(Constants::getTwitchClientSecret(), 'HS256');
        return \Firebase\JWT\JWT::decode($_SESSION['user_jwt'], $keyArray);
    }

    public function revoke()
    {
        unset($_SESSION['user_jwt']);
        unset($_SESSION['user_refresh_token']);

        session_destroy();
    }

    public function getAccessToken()
    {
        $decoded = $this->decodeJwt();
        return $decoded->sub;
    }

    public function getTwitchUsername()
    {
        $accessToken = $this->getAccessToken();
        $request = $this->twitchApi->getUsersApi()->getUserByAccessToken($accessToken);
        $response = json_decode($request->getBody()->getContents());
        return $response->data[0]->display_name;
    }

    public function generateUserJWT()
    {
        $payload = [
            'iss' => 'LundBot69',
            'sub' => $this->accessToken,
            'iat' => time(),
            'exp' => time() + 86400 // 1 day
        ];
        return \Firebase\JWT\JWT::encode(
            $payload,
            Constants::getTwitchClientSecret(),
            'HS256',
            Constants::getKid()
        );
    }
}
