<?php

namespace LundBot69Api\Controllers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\UserUtils;

class SongRequestController
{

    const SONG_REQUEST_MODEL = "SongRequests";

    public function getDefaultSongs()
    {
    }

    public function getRequestedSongs($from)
    {
        $creatorId = UserUtils::getCreatorId();

        $requestedSongs = Database::read(
            $this::SONG_REQUEST_MODEL,
            ['creator_id' => $creatorId],
            ["requested_by", "youtube_video_id", "requested_at"],
            10
        );

        $from->send(json_encode(['type' => 'requestedSongs', 'data' => $requestedSongs]));
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
