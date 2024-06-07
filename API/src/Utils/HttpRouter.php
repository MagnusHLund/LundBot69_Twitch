<?php

namespace LundBot69Api\Utils;

use LundBot69Api\Handlers\BansHandler;
use LundBot69Api\Handlers\CommandsHandler;
use LundBot69Api\Handlers\PointsHandler;
use LundBot69Api\Handlers\GiveawayHandler;
use LundBot69Api\Handlers\SettingsHandler;
use LundBot69Api\Handlers\SongRequestHandler;
use LundBot69Api\Handlers\TwitchHandler;
use LundBot69Api\Handlers\BotHandler;
use LundBot69Api\Handlers\MessageHandler;

class HttpRouter
{
    private $routes = [];

    public function __construct()
    {
        $bansHandler = new BansHandler;
        $commandsHandler = new CommandsHandler;
        $messageHandler = new MessageHandler;
        $pointsHandler = new PointsHandler;
        $giveawayHandler = new GiveawayHandler;
        $settingsHandler = new SettingsHandler;
        $songRequestHandler = new SongRequestHandler;
        $twitchHandler = new TwitchHandler;
        $botHandler = new BotHandler;


        $this->routes = [
            // Bans
            ["POST", "/api/bans/banSong", [$bansHandler, "banSong"]],
            ["POST", "/api/bans/unbanSong", [$bansHandler, "unbanSong"]],
            ["POST", "/api/bans/banUser", [$bansHandler, "banUser"]],
            ["POST", "/api/bans/unbanUser", [$bansHandler, "unbanUser"]],
            ["GET", "/api/bans/getBannedSongs", [$bansHandler, "getBannedSongs"]],
            ["GET", "/api/bans/getBannedUsers", [$bansHandler, "getBannedUsers"]],

            // Commands
            ["GET", "/api/commands/getCommands", [$commandsHandler, "getCommands"]],
            ["POST", "/api/commands/createCommand", [$commandsHandler, "createCommand"]],
            ["POST", "/api/commands/editCommand", [$commandsHandler, "editCommand"]],
            ["POST", "/api/commands/deleteCommand", [$commandsHandler, "deleteCommand"]],
            ["POST", "/api/commands/updateCommandActivity", [$commandsHandler, "updateCommandActivity"]],
            ["GET", "/api/commands/getCommandByName", [$commandsHandler, "getCommandByName"]],

            // points
            ["POST", "/api/points/pointsLeaderboard", [$pointsHandler, "getPointsLeaderboard"]],
            ["POST", "/api/points/modifyUsersPoints", [$pointsHandler, "modifyUsersPoints"]],
            ["POST", "/api/points/wipeAllPoints", [$pointsHandler, "wipeAllPoints"]],
            ["POST", "/api/points/removeUser", [$pointsHandler, "removeUser"]],
            ["POST", "/api/points/addPoints", [$pointsHandler, "addPoints"]],

            // Giveaway
            ["POST", "/api/giveaway/pickGiveawayWinner", [$giveawayHandler, "pickGiveawayWinner"]],
            ["POST", "/api/giveaway/resetGiveawayParticipants", [$giveawayHandler, "resetGiveawayParticipants"]],
            ["POST", "/api/giveaway/addGiveawayParticipants", [$giveawayHandler, "addGiveawayParticipants"]],

            // Settings
            ["POST", "/api/settings/toggleBotActivityState", [$settingsHandler, "toggleBotActivityState"]],
            ["POST", "/api/settings/toggleSongRequestActivityState", [$settingsHandler, "toggleSongRequestActivityState"]],
            ["POST", "/api/settings/toggleGamblingActivityState", [$settingsHandler, "toggleGamblingActivityState"]],
            ["POST", "/api/settings/toggleShoutOutActivityState", [$settingsHandler, "toggleShoutOutActivityState"]],
            ["POST", "/api/settings/setAutoPinnedMessage", [$settingsHandler, "setAutoPinnedMessage"]],
            ["POST", "/api/settings/getAutoPinnedMessage", [$settingsHandler, "getAutoPinnedMessage"]],
            ["POST", "/api/settings/getSettingsActivityStates", [$settingsHandler, "getSettingsActivityStates"]],

            // Song request
            ["POST", "/api/sr/deleteDefaultSongs", [$songRequestHandler, "deleteDefaultSongs"]],
            ["POST", "/api/sr/deleteRequestedSongs", [$songRequestHandler, "deleteRequestedSongs"]],
            ["POST", "/api/sr/addDefaultSong", [$songRequestHandler, "addDefaultSong"]],
            ["POST", "/api/sr/addRequestedSong", [$songRequestHandler, "addRequestedSong"]],

            // Twitch
            ["POST", "/api/twitch/connectUser", [$twitchHandler, "connectUser"], ["requestBody"]],

            // Bot
            ["GET", "/api/bot/getChannels", [$botHandler, "getAllRegisteredChannels"]],
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
