<?php

namespace LundBot69Api\Utils;

use Firebase\JWT\Key;
use Firebase\JWT\JWT;

class Authentication
{
    public static function generateUserJWT($accessToken)
    {
        $oneDay = time() + 86400;

        $payload = [
            'iss' => 'LundBot69',
            'sub' => $accessToken,
            'iat' => time(),
            'exp' => $oneDay
        ];
        return JWT::encode(
            $payload,
            Constants::getTwitchClientSecret(),
            'HS256',
            Constants::getKid()
        );
    }

    public static function decodeJwt()
    {
        $keyArray = new Key(Constants::getTwitchClientSecret(), 'HS256');
        return JWT::decode($_COOKIE['jwt'], $keyArray);
    }
}
