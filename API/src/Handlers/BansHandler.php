<?php

namespace LundBot69Api\Handlers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\UserUtils;

class BansHandler
{
    private const BAN_SONG_MODEL = "BannedSongs";
    private const BAN_USER_MODEL = "BannedAccounts";

    public function banSong($data)
    {
        $videoId = $data[0]['videoId'];
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        Database::create(
            $this::BAN_SONG_MODEL,
            [
                'creator_id'       => $creatorId,
                'youtube_video_id' => $videoId
            ]
        );
    }

    public function unbanSong($data)
    {
        $videoId = $data[0]['videoId'];
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        Database::delete(
            $this::BAN_SONG_MODEL,
            [
                'creator_id'       => $creatorId,
                'youtube_video_id' => $videoId
            ]
        );
    }

    public function banUser($username, $creator)
    {
        $creatorId = UserUtils::getCreatorId($creator);

        Database::create(
            $this::BAN_USER_MODEL,
            [
                'creator_id'      => $creatorId,
                'twitch_username' => $username
            ]
        );
    }

    public function unbanUser($username, $creator)
    {
        $creatorId = UserUtils::getCreatorId($creator);

        Database::delete(
            $this::BAN_USER_MODEL,
            [
                'creator_id'      => $creatorId,
                'twitch_username' => $username
            ]
        );
    }

    public function getBannedUsers()
    {
    }

    public function getBannedSongs()
    {
    }
}
