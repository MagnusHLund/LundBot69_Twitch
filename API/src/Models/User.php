<?php

namespace LundBot69Api\Models;

use LundBot69Api\Utils\Constants;
use TwitchApi\HelixGuzzleClient;
use TwitchApi\TwitchApi;
use LundBot69Api\Utils\Authentication;

class User
{
    const CREATOR_MODEL = "Creators";

    private $accessToken;
    private $refreshToken;

    private $twitchApi;
    private $constants;
    private $authentication;

    public function __construct($accessToken, $refreshToken)
    {
        $this->constants = Constants::getInstance();
        $this->authentication = Authentication::getInstance();

        $twitchClientId = $this->constants->getTwitchClientID();
        $helixGuzzleClient = new HelixGuzzleClient($twitchClientId);

        $twitchClientSecret = $this->constants->getTwitchClientSecret();

        $this->twitchApi = new TwitchApi(
            $helixGuzzleClient,
            $twitchClientId,
            $twitchClientSecret,
        );

        $this->accessToken = $accessToken;
        $this->refreshToken = $refreshToken;
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
        $this->setJwtCookie();
        $_SESSION['user_refresh_token'] = $this->refreshToken;
    }

    private function setJwtCookie()
    {
        $cookieName = "jwt";

        $oneDay = 86400;
        $expirationDate = time() + $oneDay;

        $jwt = $this->authentication->generateUserJwt($this->accessToken);

        setcookie($cookieName, $jwt, $expirationDate, "/", "", false, true);
    }

    public function refresh()
    {
        try {
            $twitchScopes = $this->constants->getTwitchScopes();

            $decoded = $this->authentication->decodeJwt();
            $expires = $decoded->exp ?? 0;
            if ($expires < time()) {

                $token = $this->twitchApi->getOauthApi()->refreshToken(
                    $this->refreshToken,
                    $twitchScopes
                );

                $data = json_decode($token->getBody()->getContents());
                $this->accessToken = $data->access_token ?? null;
                $this->refreshToken = $data->refresh_token ?? null;

                if ($this->accessToken && $this->refreshToken) {
                    $this->save();
                } else {
                    self::revoke();
                }
            }
        } catch (\Exception $e) {
            self::revoke();
        }
    }

    public static function revoke()
    {
        self::removeUserJwt();
        unset($_SESSION['user_refresh_token']);

        session_destroy();
    }

    public static function removeUserJwt()
    {
        $cookieName = "jwt";

        $oneDay = 86400;
        $expirationDate = time() - $oneDay;

        setcookie($cookieName, "", $expirationDate);
    }

    public function getAccessToken()
    {
        $decoded = $this->authentication->decodeJwt();
        return $decoded->sub;
    }

    public function getTwitchUsername()
    {
        $accessToken = $this->getAccessToken();
        $request = $this->twitchApi->getUsersApi()->getUserByAccessToken($accessToken);
        $response = json_decode($request->getBody()->getContents());
        return $response->data[0]->display_name;
    }
}
