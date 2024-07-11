<?php

namespace LundBot69Api\Models;

use LundBot69Api\Utils\Constants;
use LundBot69Api\Utils\securityManager;
use LundBot69Api\Utils\CookieManager;
use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\TwitchUtils;

class Creator
{
    const CREATOR_MODEL = "Creators";

    public $creatorId;

    private $database;
    private $constants;
    private $twitchUtils;
    private $cookieManager;
    private $securityManager;

    public function __construct()
    {
        $this->database = Database::getInstance();
        $this->constants = Constants::getInstance();
        $this->twitchUtils = TwitchUtils::getInstance();
        $this->cookieManager = CookieManager::getInstance();
        $this->securityManager = securityManager::getInstance();
    }

    public function loginCreator($securityManagerToken)
    {
        $twitchTokens = $this->twitchUtils->getUserFromAuthenticationCode($securityManagerToken);

        if (!empty($twitchTokens)) {
            $username = $this->twitchUtils->getUsernameFromAccessToken($twitchTokens['accessToken']);
            $this->creatorId = $this->database->read(
                self::CREATOR_MODEL,
                ["twitch_username" => $username],
                ["creator_id"]
            );

            $jwt = $this->securityManager->encodeJwt($twitchTokens['accessToken']);

            $this->saveTwitchTokens($jwt, $twitchTokens['refreshToken']);
        }
    }

    public function saveTwitchTokens($jwt, $refreshToken)
    {
        $encryptedRefreshToken = $this->securityManager->encryptData($refreshToken);
        $this->database->update(
            self::CREATOR_MODEL,
            ["creator_id" => $this->creatorId],
            ["refresh_token" => $encryptedRefreshToken]
        );

        $this->cookieManager->setJwtCookie($jwt);
    }

    public function refresh()
    {
        try {
            $jwtCookie = $_COOKIE['jwt'];
            $decodedJwt = $this->securityManager->decodeJwt($jwtCookie);

            $refreshToken = $this->database->read(self::CREATOR_MODEL, ["creator_id" => $this->creatorId]);

            $twitchTokens = $this->twitchUtils->refreshLogin($decodedJwt, $refreshToken);

            $newJwt = $this->securityManager->encodeJwt($twitchTokens['accessToken']);

            $this->saveTwitchTokens($newJwt, $twitchTokens['refreshToken']);
        } catch (\Exception $e) {
            $this->revoke();
        }
    }

    public function revoke()
    {
        $this->cookieManager->unsetCookie("jwt");

        $this->database->update(
            self::CREATOR_MODEL,
            ['creator_id' => $this->creatorId],
            ["refresh_token" => null]
        );

        session_destroy();
    }
}
