<?php

namespace LundBot69Api\Utils;

use TwitchApi\HelixGuzzleClient;
use TwitchApi\TwitchApi;

class TwitchUtils
{
    private static $instance = null;

    private $twitchApi;
    private $constants;

    private function __construct()
    {
        $this->constants = Constants::getInstance();

        $twitchClientId = $this->constants->getTwitchClientID();
        $helixGuzzleClient = new HelixGuzzleClient($twitchClientId);

        $twitchClientSecret = $this->constants->getTwitchClientSecret();

        $this->twitchApi = new TwitchApi(
            $helixGuzzleClient,
            $twitchClientId,
            $twitchClientSecret,
        );
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new TwitchUtils();
        }
        return self::$instance;
    }

    public function getUserFromAuthenticationCode($code)
    {
        $redirectUri = $this->constants->getTwitchRedirectUri();

        $token = $this->twitchApi->getOauthApi()->getUserAccessToken($code, $redirectUri);
        $data = json_decode($token->getBody()->getContents());

        $accessToken = $data->access_token ?? null;
        $refreshToken = $data->refresh_token ?? null;

        if ($accessToken && $refreshToken) {
            return array("accessToken" => $accessToken, "refreshToken" => $refreshToken);
        } else {
            return null;
        }
    }

    public function getUsernameFromAccessToken($accessToken)
    {
        $request = $this->twitchApi->getUsersApi()->getUserByAccessToken($accessToken);
        $response = json_decode($request->getBody()->getContents());

        return $response->data[0]->display_name;
    }

    public function refreshLogin($decodedJwt, $refreshToken)
    {
        try {
            $twitchScopes = $this->constants->getTwitchScopes();

            $expires = $decodedJwt->exp ?? 0;
            if ($expires < time()) {

                $token = $this->twitchApi->getOauthApi()->refreshToken(
                    $refreshToken,
                    $twitchScopes
                );

                $data = json_decode($token->getBody()->getContents());
                $accessToken = $data->access_token ?? null;
                $refreshToken = $data->refresh_token ?? null;

                if ($accessToken && $refreshToken) {
                    return array("accessToken" => $accessToken, "refreshToken" => $refreshToken);
                } else {
                    return null;
                }
            }
        } catch (\Exception $e) {
            return null;
        }
    }
}
