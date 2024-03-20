<?php

namespace LundBot69Api;

use Dotenv;
use LundBot69Api\Utils\Router;

require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__);
$dotenv->load();

class ApiEntry
{
    public function __construct()
    {
        session_start();
    }

    public static function handleRequest()
    {
        $method = $_SERVER['REQUEST_METHOD'];
        $path = $_SERVER['REQUEST_URI'];
        $requestBody = json_decode(file_get_contents('php://input'), true);

        $router = new Router;
        $router->handleRequest($method, $path, $requestBody);
    }
}

ApiEntry::handleRequest();
