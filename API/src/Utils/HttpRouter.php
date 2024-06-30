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
            ["POST", "/api/bans/unbanSong", [$bansController, "unbanSong"]],
            ["POST", "/api/bans/banUser", [$bansController, "banUser"]],
            ["POST", "/api/bans/unbanUser", [$bansController, "unbanUser"]],
            ["GET", "/api/bans/getBannedSongs", [$bansController, "getBannedSongs"]],
            ["GET", "/api/bans/getBannedUsers", [$bansController, "getBannedUsers"]],

            // Commands
            ["GET", "/api/commands/getCommands", [$commandsController, "getCommands"]],
            ["POST", "/api/commands/createCommand", [$commandsController, "createCommand"]],
            ["POST", "/api/commands/editCommand", [$commandsController, "editCommand"]],
            ["POST", "/api/commands/deleteCommand", [$commandsController, "deleteCommand"]],
            ["POST", "/api/commands/updateCommandActivity", [$commandsController, "updateCommandActivity"]],
            ["GET", "/api/commands/getCommandByName", [$commandsController, "getCommandByName"]],

            // points
            ["POST", "/api/points/pointsLeaderboard", [$pointsController, "getPointsLeaderboard"]],
            ["POST", "/api/points/modifyUsersPoints", [$pointsController, "modifyUsersPoints"]],
            ["POST", "/api/points/wipeAllPoints", [$pointsController, "wipeAllPoints"]],
            ["POST", "/api/points/removeUser", [$pointsController, "removeUser"]],
            ["POST", "/api/points/addPoints", [$pointsController, "addPoints"]],

            // Giveaway
            ["POST", "/api/giveaway/pickGiveawayWinner", [$giveawayController, "pickGiveawayWinner"]],
            ["POST", "/api/giveaway/resetGiveawayParticipants", [$giveawayController, "resetGiveawayParticipants"]],
            ["POST", "/api/giveaway/addGiveawayParticipants", [$giveawayController, "addGiveawayParticipants"]],

            // Settings
            ["POST", "/api/settings/toggleBotActivityState", [$settingsController, "toggleBotActivityState"]],
            ["POST", "/api/settings/toggleSongRequestActivityState", [$settingsController, "toggleSongRequestActivityState"]],
            ["POST", "/api/settings/toggleGamblingActivityState", [$settingsController, "toggleGamblingActivityState"]],
            ["POST", "/api/settings/toggleShoutOutActivityState", [$settingsController, "toggleShoutOutActivityState"]],
            ["POST", "/api/settings/setAutoPinnedMessage", [$settingsController, "setAutoPinnedMessage"]],
            ["POST", "/api/settings/getAutoPinnedMessage", [$settingsController, "getAutoPinnedMessage"]],
            ["POST", "/api/settings/getSettingsActivityStates", [$settingsController, "getSettingsActivityStates"]],

            // Song request
            ["POST", "/api/sr/deleteDefaultSongs", [$songRequestController, "deleteDefaultSongs"]],
            ["POST", "/api/sr/deleteRequestedSongs", [$songRequestController, "deleteRequestedSongs"]],
            ["POST", "/api/sr/addDefaultSong", [$songRequestController, "addDefaultSong"]],
            ["POST", "/api/sr/addRequestedSong", [$songRequestController, "addRequestedSong"]],

            // Twitch
            ["POST", "/api/twitch/connectUser", [$twitchController, "connectUser"], ["requestBody"]],

            // Bot
            ["GET", "/api/bot/getChannels", [$botController, "getAllRegisteredChannels"]],
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
