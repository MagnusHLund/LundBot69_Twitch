<?php

namespace LundBot69Api\Middleware;

class CORSMiddleware
{
    public function handle()
    {
        header("Access-Control-Allow-Origin: https://localhost:5173");
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
    }
}
