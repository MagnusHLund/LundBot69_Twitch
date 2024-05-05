<?php

namespace LundBot69Api\Utils;

use LundBot69Api\Factories\HandlersFactory;
use Ratchet\ComponentInterface;
use Ratchet\ConnectionInterface;


class WebSocketRouter extends ComponentInterface
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
                $this->handlers->getGiveawayHandler()->getGiveawayParticipants($from);
                break;
            case 'pointsLeaderboard':
                $this->handlers->getPointsHandler()->getPointsLeaderboard($from);
                break;
            case 'requestedSongs':
                $this->handlers->getSongRequestHandler()->getRequestedSongs($from);
                break;
            default:
                json_encode(['error' => 'Can not find the websocket message type!']);
        }
    }
}
