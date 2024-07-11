<?php

namespace LundBot69Api\Utils;

use Firebase\JWT\Key;
use Firebase\JWT\JWT;

class securityManager
{
    const ENCRYPTION_CIPHER = 'AES-128-CBC';

    private static $instance = null;

    private $constants;

    private $encryptionKey;

    private function __construct()
    {
        $this->constants = Constants::getInstance();

        $this->encryptionKey = $this->constants->getEncryptionKey();
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new securityManager();
        }
        return self::$instance;
    }

    public function encodeJwt($accessToken)
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

    public function decodeJwt($jwt)
    {
        $twitchClientSecret = $this->constants->getTwitchClientSecret();

        $keyArray = new Key($twitchClientSecret, 'HS256');
        return JWT::decode($jwt, $keyArray);
    }

    public function encryptData($dataToEncrypt)
    {
        try {
            $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length(self::ENCRYPTION_CIPHER));

            $encrypted = openssl_encrypt($dataToEncrypt, self::ENCRYPTION_CIPHER, $this->encryptionKey, 0, $iv);
            return base64_encode($iv . $encrypted);
        } catch (\Exception $e) {
        }
    }

    public function decryptData($dataToDecrypt)
    {
        try {
            $decodedEncryptedData = base64_decode($dataToDecrypt);

            $iv = substr($decodedEncryptedData, 0, openssl_cipher_iv_length(self::ENCRYPTION_CIPHER));

            $cipherText = substr($decodedEncryptedData, openssl_cipher_iv_length(self::ENCRYPTION_CIPHER));
            return openssl_decrypt($cipherText, self::ENCRYPTION_CIPHER, $this->encryptionKey, 0, $iv);
        } catch (\Exception $e) {
        }
    }
}
