<?php

namespace LundBot69Api\Utils;

use LundBot69Api\Handlers\BansHandler;
use LundBot69Api\Handlers\CommandsHandler;
use LundBot69Api\Handlers\GamblingHandler;
use LundBot69Api\Handlers\GiveawayHandler;
use LundBot69Api\Handlers\SettingsHandler;
use LundBot69Api\Handlers\SongRequestHandler;
use LundBot69Api\Handlers\TwitchHandler;
use LundBot69Api\Handlers\BotHandler;
use LundBot69Api\Handlers\WebSocketHandler;

class HttpRouter
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
        $botHandler = new BotHandler;
        $websocketHandler = new WebSocketHandler;


        $this->routes = [
            // Bans
            ["POST", "/api/v1/bans/banSong", [$bansHandler, "banSong"]],
            ["POST", "/api/v1/bans/unbanSong", [$bansHandler, "unbanSong"]],
            ["POST", "/api/v1/bans/banUser", [$bansHandler, "banUser"]],
            ["POST", "/api/v1/bans/unbanUser", [$bansHandler, "unbanUser"]],

            // Commands
            ["POST", "/api/v1/commands/getCommands", [$commandsHandler, "getCommands"]],
            ["POST", "/api/v1/commands/createCommand", [$commandsHandler, "createCommand"]],
            ["POST", "/api/v1/commands/editCommand", [$commandsHandler, "editCommand"]],
            ["POST", "/api/v1/commands/deleteCommand", [$commandsHandler, "deleteCommand"]],
            ["POST", "/api/v1/commands/toggleCommandActivityState", [$commandsHandler, "toggleCommandActivityState"]],

            // Gambling
            ["POST", "/api/v1/gambling/getGamblers", [$gamblingHandler, "getGamblers"]],
            ["POST", "/api/v1/gambling/modifyGamblerPoints", [$gamblingHandler, "modifyGamblerPoints"]],
            ["POST", "/api/v1/gambling/wipeGamblerPoints", [$gamblingHandler, "wipeGamblerPoints"]],
            ["POST", "/api/v1/gambling/deleteGambler", [$gamblingHandler, "deleteGambler"]],
            ["POST", "/api/v1/gambling/createGambler", [$gamblingHandler, "createGambler"]],

            // Giveaway
            ["POST", "/api/v1/giveaway/pickGiveawayWinner", [$giveawayHandler, "pickGiveawayWinner"]],
            ["POST", "/api/v1/giveaway/resetGiveawayParticipants", [$giveawayHandler, "resetGiveawayParticipants"]],
            ["POST", "/api/v1/giveaway/addGiveawayParticipants", [$giveawayHandler, "addGiveawayParticipants"]],

            // Settings
            ["POST", "/api/v1/settings/toggleBotActivityState", [$settingsHandler, "toggleBotActivityState"]],
            ["POST", "/api/v1/settings/toggleSongRequestActivityState", [$settingsHandler, "toggleSongRequestActivityState"]],
            ["POST", "/api/v1/settings/toggleGamblingActivityState", [$settingsHandler, "toggleGamblingActivityState"]],
            ["POST", "/api/v1/settings/toggleShoutOutActivityState", [$settingsHandler, "toggleShoutOutActivityState"]],
            ["POST", "/api/v1/settings/setAutoPinnedMessage", [$settingsHandler, "setAutoPinnedMessage"]],
            ["POST", "/api/v1/settings/getAutoPinnedMessage", [$settingsHandler, "getAutoPinnedMessage"]],
            ["POST", "/api/v1/settings/getSettingsActivityStates", [$settingsHandler, "getSettingsActivityStates"]],

            // Song request
            ["POST", "/api/v1/sr/deleteDefaultSongs", [$songRequestHandler, "deleteDefaultSongs"]],
            ["POST", "/api/v1/sr/deleteRequestedSongs", [$songRequestHandler, "deleteRequestedSongs"]],
            ["POST", "/api/v1/sr/addDefaultSong", [$songRequestHandler, "addDefaultSong"]],
            ["POST", "/api/v1/sr/addRequestedSong", [$songRequestHandler, "addRequestedSong"]],

            // Twitch
            ["POST", "/api/v1/twitch/connectUser", [$twitchHandler, "connectUser"], ["requestBody"]],

            // Bot
            ["GET", "/api/v1/bot/getChannels", [$botHandler, "getAllRegisteredChannels"]],

            // Websocket
            ["POST", "/api/v1/start-websocket", [$websocketHandler, "startWebSocket"]]
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
