<?php

namespace LundBot69Api\Handlers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Handlers\TwitchHandler;

class BansHandler
{
    private const BAN_SONG_MODEL = "BannedSongs";
    private const BAN_USER_MODEL = "BannedAccounts";

    public function banSong($videoId, $creator)
    {
        $creatorId = TwitchHandler::getCreatorId($creator);

        Database::create(
            $this::BAN_SONG_MODEL,
            [
                'CreatorID' => $creatorId,
                'SongLink' => $videoId // TODO: change column name
            ]
        );
    }

    public function unbanSong($videoId, $creator)
    {
        $creatorId = TwitchHandler::getCreatorId($creator);

        Database::delete(
            $this::BAN_SONG_MODEL,
            [
                'CreatorID' => $creatorId,
                'SongLink' => $videoId // TODO: change column name
            ]
        );
    }

    public function banUser($username, $creator)
    {
        $creatorId = TwitchHandler::getCreatorId($creator);

        Database::create(
            $this::BAN_USER_MODEL,
            [
                'CreatorID' => $creatorId,
                'TwitchUsername' => $username // TODO: change column name
            ]
        );
    }

    public function unbanUser($username, $creator)
    {
        $creatorId = TwitchHandler::getCreatorId($creator);

        Database::delete(
            $this::BAN_USER_MODEL,
            [
                'CreatorID' => $creatorId,
                'TwitchUsername' => $username // TODO: change column name
            ]
        );
    }

    // Uses websocket
    public function getBannedUsers()
    {
    }

    // Uses websocket
    public function getBannedSongs()
    {
    }
}
