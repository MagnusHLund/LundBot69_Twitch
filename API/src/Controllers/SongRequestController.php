<?php

namespace LundBot69Api\Controllers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\UserUtils;
use LundBot69Api\Utils\MessageManager;

class SongRequestController
{
    const SONG_REQUEST_MODEL = "SongRequests";

    private $database;
    private $messageManager;

    public function __construct()
    {
        $this->database = Database::getInstance();
        $this->messageManager = MessageManager::getInstance();
    }

    public function getDefaultSongs()
    {
    }

    public function getRequestedSongs()
    {
        $creatorId = UserUtils::getCreatorId();

        $requestedSongs = $this->database->read(
            $this::SONG_REQUEST_MODEL,
            ['creator_id' => $creatorId],
            ["requested_by", "youtube_video_id", "requested_at"],
            10
        );

        $this->messageManager->sendSuccess($requestedSongs);
    }

    public function getSongToPlay()
    {
    }

    public function changeSongPlayOrder()
    {
    }

    public function deleteDefaultSongs()
    {
    }

    public function deleteRequestedSongs()
    {
    }

    public function addDefaultSong()
    {
    }

    public function addRequestedSong()
    {
    }
}
