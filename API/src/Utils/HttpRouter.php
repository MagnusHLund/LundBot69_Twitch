<?php

namespace LundBot69Api\Utils;

use LundBot69Api\Controllers\BansController;
use LundBot69Api\Controllers\CommandsController;
use LundBot69Api\Controllers\PointsController;
use LundBot69Api\Controllers\GiveawayController;
use LundBot69Api\Controllers\SettingsController;
use LundBot69Api\Controllers\SongRequestController;
use LundBot69Api\Controllers\TwitchController;
use LundBot69Api\Controllers\BotController;
use LundBot69Api\Controllers\MessageController;

class HttpRouter
{
    private $routes = [];

    public function __construct()
    {
        $bansController = new BansController;
        $commandsController = new CommandsController;
        $messageController = new MessageController;
        $pointsController = new PointsController;
        $giveawayController = new GiveawayController;
        $settingsController = new SettingsController;
        $songRequestController = new SongRequestController;
        $twitchController = new TwitchController;
        $botController = new BotController;


        $this->routes = [
            // Bans
            ["POST", "/api/bans/banSong", [$bansController, "banSong"]],
            ["POST", "/api/bans/banUser", [$bansController, "banUser"]],
            ["GET", "/api/bans/getBannedSongs", [$bansController, "getBannedSongs"]],
            ["GET", "/api/bans/getBannedUsers", [$bansController, "getBannedUsers"]],
            ["DELETE", "/api/bans/unbanSong", [$bansController, "unbanSong"]],
            ["DELETE", "/api/bans/unbanUser", [$bansController, "unbanUser"]],

            // Bot
            ["GET", "/api/bot/getChannels", [$botController, "getAllRegisteredChannels"]],

            // Commands
            ["POST", "/api/commands/createCommand", [$commandsController, "createCommand"]],
            ["GET", "/api/commands/getCommandByName", [$commandsController, "getCommandByName"]],
            ["GET", "/api/commands/getAllCommands", [$commandsController, "getCommands"]],
            ["PUT", "/api/commands/editCommand", [$commandsController, "editCommand"]],
            ["PUT", "/api/commands/updateCommandActivity", [$commandsController, "updateCommandActivity"]],
            ["DELETE", "/api/commands/deleteCommand", [$commandsController, "deleteCommand"]],

            // Giveaway
            ["POST", "/api/giveaway/addGiveawayParticipants", [$giveawayController, "addGiveawayParticipants"]],
            ["GET", "/api/giveaway/getGiveawayWinner", [$giveawayController, "getGiveawayWinner"]],
            ["GET", "/api/giveaway/getGiveawayParticipants", [$giveawayController, "getGiveawayParticipants"]],
            ["DELETE", "/api/giveaway/resetGiveawayParticipants", [$giveawayController, "resetGiveawayParticipants"]],

            // Message
            ["POST", "/api/messages/addMessage", [$messageController, "addMessage"]],
            ["GET", "/api/messages/getMessageByName", [$messageController, "getMessageByName"]],
            ["PUT", "/api/messages/editMessage", [$messageController, "editMessage"]],
            ["DELETE", "/api/messages/deleteMessage", [$messageController, "deleteMessage"]],

            // Points
            ["GET", "/api/points/getPointsLeaderboard", [$pointsController, "getPointsLeaderboard"]],
            ["PUT", "/api/points/modifyUserPoints", [$pointsController, "modifyUsersPoints"]],
            ["DELETE", "/api/points/wipeEveryonesPoints", [$pointsController, "wipeAllPoints"]],
            ["DELETE", "/api/points/wipeUserPoints", [$pointsController, "removeUser"]],

            // Settings
            ["GET", "/api/settings/getSettingActivityState", [$settingsController, "getSettingActivityState"]],
            ["PUT", "/api/settings/setBotActivityState", [$settingsController, "setBotActivityState"]],
            ["PUT", "/api/settings/setShoutOutActivityState", [$settingsController, "setShoutOutActivityState"]],
            ["PUT", "/api/settings/setAutoPinnedMessage", [$settingsController, "setAutoPinnedMessage"]],

            // Song request
            ["POST", "/api/sr/addDefaultSong", [$songRequestController, "addDefaultSong"]],
            ["POST", "/api/sr/addRequestedSong", [$songRequestController, "addRequestedSong"]],
            ["PUT", "/api/sr/changeSongPlayOrder", [$songRequestController, "changeSongPlayOrder"]],
            ["DELETE", "/api/sr/deleteDefaultSong", [$songRequestController, "deleteDefaultSong"]],
            ["DELETE", "/api/sr/deleteRequestedSong", [$songRequestController, "deleteRequestedSong"]],

            // Twitch
            ["POST", "/api/twitch/connectUser", [$twitchController, "connectUser"], ["requestBody"]],
        ];
    }

    public function handleRequest($method, $path, $requestBody)
    {
        foreach ($this->routes as $route) {
            $routeMethod = $route[0];
            $routePath = $route[1];
            $handler = $route[2];
            $params = $route[3] ?? [];

            if ($method === $routeMethod && $path === $routePath) {
                call_user_func_array([$handler[0], $handler[1]], [[$requestBody], $params]);
                return;
            }
        }

        http_response_code(404);
        echo json_encode(["error" => "This route does not exist!"]);
        exit;
    }
}
