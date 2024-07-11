<?php

namespace LundBot69Api\Controllers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\MessageManager;
use LundBot69Api\Utils\UserUtils;

class BansController
{
    private const BAN_SONG_MODEL = "SongRequestBannedSongs";
    private const BAN_USER_MODEL = "SongRequestBannedAccounts";

    private $database;
    private $messageManager;

    public function __construct()
    {
        $this->database = Database::getInstance();
        $this->messageManager = MessageManager::getInstance();
    }

    public function banSong($data)
    {
        $videoId = $data[0]['videoId'];
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        $this->database->create(
            $this::BAN_SONG_MODEL,
            [
                'creator_id'       => $creatorId,
                'youtube_video_id' => $videoId
            ]
        );

        $responseMessage = "The song has been banned!";
        $this->messageManager->sendMessage($responseMessage);
    }

    public function unbanSong($data)
    {
        $videoId = $data[0]['videoId'];
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        $this->database->delete(
            $this::BAN_SONG_MODEL,
            [
                'creator_id'       => $creatorId,
                'youtube_video_id' => $videoId
            ]
        );

        $responseMessage = "The song has been unbanned!";
        $this->messageManager->sendMessage($responseMessage);
    }

    public function getBannedSongs($data)
    {
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        $result = $this->database->read(
            $this::BAN_SONG_MODEL,
            ['creator_id' => $creatorId,],
            'youtube_video_id',
            10
        );

        $this->messageManager->sendMessage($result);
    }

    public function banUser($data)
    {
        $twitchUsername = $data[0]['twitchUsername'];
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        $this->database->create(
            $this::BAN_USER_MODEL,
            [
                'creator_id'       => $creatorId,
                'twitch_username' => $twitchUsername
            ]
        );

        $responseMessage = "The user has been banned!";
        $this->messageManager->sendMessage($responseMessage);
    }

    public function unbanUser($data)
    {
        $twitchUsername = $data[0]['twitchUsername'];
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        $this->database->delete(
            $this::BAN_USER_MODEL,
            [
                'creator_id'       => $creatorId,
                'twitch_username' => $twitchUsername
            ]
        );

        $responseMessage = "The user has been unbanned!";
        $this->messageManager->sendMessage($responseMessage);
    }

    public function getBannedUsers($data)
    {
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        $result = $this->database->read(
            $this::BAN_USER_MODEL,
            ['creator_id' => $creatorId,],
            'twitch_username',
            10
        );

        $this->messageManager->sendMessage($result);
    }
}
