<?php

namespace LundBot69Api\Handlers;

use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use LundBot69Api\Utils\WebSocketRouter;

class WebSocketHandler
{
    public function startWebSocket()
    {
        $server = IoServer::factory(
            new HttpServer(
                new WsServer(
                    new WebSocketRouter()
                )
            ),
            8080
        );

        $server->run();
    }
}
