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

    public function onOpen(ConnectionInterface $conn)
    {
        $querystring = $conn->httpRequest->getUri()->getQuery();
        parse_str($querystring, $params);
        $jwt = $params['token'] ?? null;

        if ($jwt) {
            $decodedJwt = Authentication::decodeJwt($jwt);

            if ($decodedJwt) {
                // If the JWT is valid, store the user's information in the connection object
                $conn->user = $decodedJwt;
            } else {
                // If the JWT is invalid, close the connection
                $conn->close();
            }
        } else {
            // If no JWT is provided, close the connection
            $conn->close();
        }
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
            case 'defaultSongs':
                $this->handlers->getSongRequestHandler()->getDefaultSongs($from);
                break;
            default:
                json_encode(['error' => 'Can not find the websocket message type!']);
        }
    }
}
