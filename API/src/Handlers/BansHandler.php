<?php

namespace LundBot69Api\Handlers;

use LundBot69Api\Models\User;

class BansHandler
{
    private $user;

    public function __construct()
    {
        $this->user = new user($_SESSION["user_jwt"], $_SESSION["user_refresh_token"]);
    }

    public function banSong()
    {
    }

    public function unbanSong()
    {
    }

    public function banUser()
    {
    }

    public function unbanUser()
    {
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
