<?php

namespace LundBot69Api;

use Dotenv;
use LundBot69Api\Handlers\TwitchAuthHandler;

require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createUnsafeImmutable(__DIR__);
$dotenv->load();

$twitchAuthHandler = new TwitchAuthHandler();

$twitchAuthHandler->connectUser();

/*
$router->addRoute('POST', '/api/login', [$loginHandler, 'handleLogin']);
$router->addRoute('POST', '/api/getSongRequests', [$songRequestHandler, 'handleGetSongRequests']);

$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['REQUEST_URI'];
$requestBody = json_decode(file_get_contents('php://input'), true);
$router->handleRequest($method, $path, $requestBody);
*/
