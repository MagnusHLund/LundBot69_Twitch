<?php

namespace LundBot69Api\Handlers;

use LundBot69Api\WebSocket\DatabaseUpdateListener;
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;

class WebSocketHandler
{
    public function startWebSocket()
    {
        $server = IoServer::factory(
            new HttpServer(
                new WsServer(
                    new DatabaseUpdateListener()
                )
            ),
            8080
        );

        $server->run();
    }
}
