<?php

namespace LundBot69Api\Utils;

use Firebase\JWT\Key;
use Firebase\JWT\JWT;

class Authentication
{
    private static $instance = null;
    private $constants;

    public function __construct()
    {
        $this->constants = Constants::getInstance();
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new Authentication();
        }
        return self::$instance;
    }

    public function generateUserJwt($accessToken)
    {
        $oneDay = time() + 86400;

        $payload = [
            'iss' => 'LundBot69',
            'sub' => $accessToken,
            'iat' => time(),
            'exp' => $oneDay
        ];

        $twitchClientSecret = $this->constants->getTwitchClientSecret();
        $kid =  $this->constants->getKid();

        return JWT::encode(
            $payload,
            $twitchClientSecret,
            'HS256',
            $kid
        );
    }

    public function decodeJwt()
    {
        $twitchClientSecret = $this->constants->getTwitchClientSecret();

        $keyArray = new Key($twitchClientSecret, 'HS256');
        return JWT::decode($_COOKIE['jwt'], $keyArray);
    }
}
