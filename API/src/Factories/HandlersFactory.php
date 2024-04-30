<?php

namespace LundBot69Api\Factories;

use LundBot69Api\Handlers\BotHandler;
use LundBot69Api\Handlers\BansHandler;
use LundBot69Api\Handlers\TwitchHandler;
use LundBot69Api\Handlers\CommandsHandler;
use LundBot69Api\Handlers\GamblingHandler;
use LundBot69Api\Handlers\GiveawayHandler;
use LundBot69Api\Handlers\SettingsHandler;
use LundBot69Api\Handlers\WebSocketHandler;
use LundBot69Api\Handlers\SongRequestHandler;

class HandlersFactory
{
    private $botHandler;
    private $bansHandler;
    private $twitchHandler;
    private $giveawayHandler;
    private $commandsHandler;
    private $gamblingHandler;
    private $settingsHandler;
    private $webSocketHandler;
    private $songRequestHandler;

    public function __construct()
    {
        $this->botHandler = new BotHandler;
        $this->bansHandler = new BansHandler;
        $this->twitchHandler = new TwitchHandler;
        $this->giveawayHandler = new GiveawayHandler;
        $this->commandsHandler = new CommandsHandler;
        $this->gamblingHandler = new GamblingHandler;
        $this->settingsHandler = new SettingsHandler;
        $this->webSocketHandler = new WebSocketHandler;
        $this->songRequestHandler = new SongRequestHandler;
    }

    public function getBotHandler(): BotHandler
    {
        return $this->botHandler;
    }

    public function getBansHandler(): BansHandler
    {
        return $this->bansHandler;
    }

    public function getTwitchHandler(): TwitchHandler
    {
        return $this->twitchHandler;
    }

    public function getGiveawayHandler(): GiveawayHandler
    {
        return $this->giveawayHandler;
    }

    public function getCommandsHandler(): CommandsHandler
    {
        return $this->commandsHandler;
    }

    public function getGamblingHandler(): GamblingHandler
    {
        return $this->gamblingHandler;
    }

    public function getSettingsHandler(): SettingsHandler
    {
        return $this->settingsHandler;
    }

    public function getWebSocketHandler(): WebSocketHandler
    {
        return $this->webSocketHandler;
    }

    public function getSongRequestHandler(): SongRequestHandler
    {
        return $this->songRequestHandler;
    }
}
