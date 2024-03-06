<?php

require_once 'Database.php';
require_once 'Router.php';
require_once 'LoginHandler.php';
require_once 'SongRequestHandler.php';

$db = new Database();
$router = new Router();

$loginHandler = new LoginHandler($db);
$songRequestHandler = new SongRequestHandler($db);

$router->addRoute('POST', '/api/login', [$loginHandler, 'handleLogin']);
$router->addRoute('POST', '/api/getSongRequests', [$songRequestHandler, 'handleGetSongRequests']);

$method = $_SERVER['REQUEST_METHOD'];
$path = $_SERVER['REQUEST_URI'];
$requestBody = json_decode(file_get_contents('php://input'), true);

$router->handleRequest($method, $path, $requestBody);
