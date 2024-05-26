<?php

namespace LundBot69Api;

use Dotenv;
use LundBot69Api\Middleware\AuthenticationMiddleware;
use LundBot69Api\Middleware\CORSMiddleware;
use LundBot69Api\Middleware\RateLimitingMiddleware;
use LundBot69Api\Utils\HttpRouter;
use LundBot69Api\Handlers\WebSocketHandler;

require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__);
$dotenv->load();

class ApiEntry
{
    private $router;

    public function __construct()
    {
        session_start();

        $this->router = new HttpRouter;
    }

    public function handleRequest()
    {
        $method = $_SERVER['REQUEST_METHOD'];
        $path = $_SERVER['REQUEST_URI'];
        $requestBody = json_decode(file_get_contents('php://input'), true);

        $this->applyMiddleware($path);
        $this->router->handleRequest($method, $path, $requestBody);
    }

    private function applyMiddleware(&$path)
    {
        CORSMiddleware::handle();
        RateLimitingMiddleware::handle($path);
        AuthenticationMiddleware::handle($path);
    }
}

$websocketHandler = new WebSocketHandler;
$websocketHandler->startWebSocket();

$apiEntry = new ApiEntry;
$apiEntry->handleRequest();
