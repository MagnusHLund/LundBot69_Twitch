<?php

namespace LundBot69Api\Middleware;

use LundBot69Api\Utils\Constants;
use LundBot69Api\Utils\MessageManager;

class CORSMiddleware
{
    const ALLOWED_HEADERS = "POST, GET, PUT, DELETE, OPTIONS";

    private static $instance = null;

    private $constants;
    private $messageManager;

    private function __construct()
    {
        $this->constants = Constants::getInstance();
        $this->messageManager = MessageManager::getInstance();
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new CORSMiddleware();
        }
        return self::$instance;
    }


    public function validateCors()
    {
        $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
        $requestMethod = $_SERVER['REQUEST_METHOD'] ?? '';
        $requestHeaders = $_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'] ?? '';

        if (!empty($origin) && in_array($origin, $this->constants->getAllowedOrigins())) {
            header("Access-Control-Allow-Origin: {$origin}");
            header("Access-Control-Allow-Credentials: true");
            header("Access-Control-Max-Age: 86400");
            header("Access-Control-Allow-Methods: " . self::ALLOWED_HEADERS);
            header("Access-Control-Allow-Headers: Content-Type, Authorization");
        } else {
            $responseMessage = "Failed CORS validation";
            $this->messageManager->sendMessage($responseMessage, 401);
            exit;
        }

        if ($requestMethod == 'OPTIONS') {
            if (!empty($requestMethod)) {
                header("Access-Control-Allow-Methods: " . self::ALLOWED_HEADERS);
            }
            if (!empty($requestHeaders)) {
                header("Access-Control-Allow-Headers: {$requestHeaders}");
            }
            http_response_code(200);
            exit;
        }
    }
}
