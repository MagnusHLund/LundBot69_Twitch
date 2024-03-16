<?php

namespace LundBot69Api\Utils;

class Router
{
    private $routes = [];

    public function addRoute($method, $path, $handler)
    {
        $this->routes[] = [$method, $path, $handler];
    }

    public function handleRequest($method, $path, $requestBody)
    {
        foreach ($this->routes as $route) {
            list($routeMethod, $routePath, $handler) = $route;
            if ($method === $routeMethod && $path === $routePath) {
                $handler($requestBody);
                return;
            }
        }
    }
}
