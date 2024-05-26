<?php

namespace LundBot69Api\Utils;

use Firebase\JWT\Key;
use Firebase\JWT\JWT;

class Authentication
{
    public static function generateUserJWT($accessToken)
    {
        $payload = [
            'iss' => 'LundBot69',
            'sub' => $accessToken,
            'iat' => time(),
            'exp' => time() + 86400 // 1 day
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
        return JWT::decode($_SESSION['user_jwt'], $keyArray);
    }
}
