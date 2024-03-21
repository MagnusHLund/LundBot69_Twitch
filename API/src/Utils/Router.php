<?php

namespace LundBot69Api\Utils;

use LundBot69Api\Handlers\BansHandler;
use LundBot69Api\Handlers\CommandsHandler;
use LundBot69Api\Handlers\GamblingHandler;
use LundBot69Api\Handlers\GiveawayHandler;
use LundBot69Api\Handlers\SettingsHandler;
use LundBot69Api\Handlers\SongRequestHandler;
use LundBot69Api\Handlers\TwitchHandler;

class Router
{
    private $routes = [];

    public function __construct()
    {
        $bansHandler = new BansHandler;
        $commandsHandler = new CommandsHandler;
        $gamblingHandler = new GamblingHandler;
        $giveawayHandler = new GiveawayHandler;
        $settingsHandler = new SettingsHandler;
        $songRequestHandler = new SongRequestHandler;
        $twitchHandler = new TwitchHandler;

        $this->routes = [
            // Bans
            ["POST", "/api/bans/banSong", [$bansHandler, "banSong"]],
            ["POST", "/api/bans/unbanSong", [$bansHandler, "unbanSong"]],
            ["POST", "/api/bans/banUser", [$bansHandler, "banUser"]],
            ["POST", "/api/bans/unbanUser", [$bansHandler, "unbanUser"]],

            // Commands
            ["POST", "/api/commands/getCommands", [$commandsHandler, "getCommands"]],
            ["POST", "/api/commands/createCommand", [$commandsHandler, "createCommand"]],
            ["POST", "/api/commands/editCommand", [$commandsHandler, "editCommand"]],
            ["POST", "/api/commands/deleteCommand", [$commandsHandler, "deleteCommand"]],
            ["POST", "/api/commands/toggleCommandActivityState", [$commandsHandler, "toggleCommandActivityState"]],

            // Gambling
            ["POST", "/api/gambling/getGamblers", [$gamblingHandler, "getGamblers"]],
            ["POST", "/api/gambling/modifyGamblerPoints", [$gamblingHandler, "modifyGamblerPoints"]],
            ["POST", "/api/gambling/wipeGamblerPoints", [$gamblingHandler, "wipeGamblerPoints"]],
            ["POST", "/api/gambling/deleteGambler", [$gamblingHandler, "deleteGambler"]],
            ["POST", "/api/gambling/createGambler", [$gamblingHandler, "createGambler"]],

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
        ];
    }

    public function handleRequest($method, $path, $requestBody)
    {
        foreach ($this->routes as $route) {
            list($routeMethod, $routePath, $handler, $params) = $route;
            if ($method === $routeMethod && $path === $routePath) {
                call_user_func_array([$handler[0], $handler[1]], [[$requestBody], $params]);
                return;
            }
        }

        http_response_code(404);
        echo json_encode(["error" => "I might need some glasses, because I can not find this path."]);
        exit;
    }
}
