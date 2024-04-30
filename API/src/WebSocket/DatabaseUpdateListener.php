<?php

namespace LundBot69Api\WebSocket;

use LundBot69Api\Factories\HandlersFactory;
use Ratchet\ComponentInterface;
use Ratchet\ConnectionInterface;
use LundBot69Api\Utils\Database;


class DatabaseUpdateListener extends ComponentInterface
{
    private $handlers;

    public function __construct()
    {
        $this->handlers = new HandlersFactory;
    }

    public function onMessage(ConnectionInterface $from, $msg)
    {
        $data = json_decode($msg);

        switch ($data->type) {
            case 'giveawayParticipants':
                $variableNameThatIWillFigureOutInTheFuture = $this->handlers->getGiveawayHandler()->getGiveawayParticipants();
                break;
            default:
                http_response_code(404); // There might be a better response code for this. Can i even use http response codes for a websocket connection?
                json_encode(['error' => 'Can not find the websocket message type!']);
                exit;
        }

        $from->send(json_encode(['type' => 'giveawayParticipants', 'data' => $variableNameThatIWillFigureOutInTheFuture]));
    }
}
