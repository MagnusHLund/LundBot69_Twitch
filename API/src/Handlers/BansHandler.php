<?php

namespace LundBot69Api\Handlers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\UserUtils;

class BansHandler
{
    private const BAN_SONG_MODEL = "SongRequestBannedSongs";
    private const BAN_USER_MODEL = "SongRequestBannedAccounts";

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

    public function getBannedSongs($data)
    {
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        $result = Database::read(
            $this::BAN_SONG_MODEL,
            ['creator_id' => $creatorId,],
            'youtube_video_id',
            10
        );

        echo json_encode(['bannedSongs' => $result]);
    }

    public function banUser($data)
    {
        $twitchUsername = $data[0]['twitchUsername'];
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        Database::create(
            $this::BAN_USER_MODEL,
            [
                'creator_id'       => $creatorId,
                'twitch_username' => $twitchUsername
            ]
        );
    }

    public function unbanUser($data)
    {
        $twitchUsername = $data[0]['twitchUsername'];
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        Database::delete(
            $this::BAN_USER_MODEL,
            [
                'creator_id'       => $creatorId,
                'twitch_username' => $twitchUsername
            ]
        );
    }

    public function getBannedUsers($data)
    {
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        $result = Database::read(
            $this::BAN_USER_MODEL,
            ['creator_id' => $creatorId,],
            'twitch_username',
            10
        );

        echo json_encode(['bannedUsers' => $result]);
    }
}
