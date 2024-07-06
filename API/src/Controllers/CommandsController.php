<?php

namespace LundBot69Api\Controllers;

use LundBot69Api\Utils\Database;
use LundBot69Api\Utils\UserUtils;

class CommandsController
{
    const COMMANDS_MODEL = "Commands";
    const COMMAND_USER_COOLDOWNS_MODEL = 'CommandUserCooldowns';

    public function getCommands($data)
    {
        $rowsToSkip = $data[0]['rowsToSkip'] ?? null;
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        $result = Database::read(
            $this::COMMANDS_MODEL,
            ['creator_id' => $creatorId],
            ['name', 'output', 'active', 'permissions', 'cost', 'user_cooldown_duration', 'global_cooldown_duration'],
            10,
            $rowsToSkip
        );

        echo json_encode(['commands' => $result]);
    }

    public function getCommandByName($data)
    {
        $creatorId = UserUtils::getCreatorId($data[0]['creatorName'] ?? null);

        $result = Database::read(
            $this::COMMANDS_MODEL,
            [
                'creator_id' => $creatorId,
                'name'       => $data[0]['name']
            ],
            ['name', 'output', 'active', 'permissions', 'cost', 'user_cooldown_duration', 'global_cooldown_duration'],
        );

        echo json_encode(['command' => $result]);
    }

    public function createCommand($data)
    {
        $creatorId = UserUtils::getCreatorId($data['creatorName']  ?? null);

        Database::create(
            $this::COMMANDS_MODEL,
            [
                'creator_id'               => $creatorId,
                'name'                     => $data[0]['name'],
                'output'                   => $data[0]['output'],
                'active'                   => 1, // Newly created commands always start as active.
                'permissions'              => $data[0]['permissions'],
                'cost'                     => $data[0]['cost'],
                'user_cooldown_duration'   => $data[0]['userCooldownDuration'],
                'global_cooldown_duration' => $data[0]['globalCooldownDuration']
            ]
        );
    }

    public function editCommand($data)
    {
        $creatorId = UserUtils::getCreatorId($data['creatorName'] ?? null);

        Database::update(
            $this::COMMANDS_MODEL,
            [
                'creator_id' => $creatorId,
                'name' => $data[0]['name']
            ],
            [
                'output'                   => $data[0]['output'],
                'permissions'              => $data[0]['permissions'],
                'cost'                     => $data[0]['cost'],
                'user_cooldown_duration'   => $data[0]['userCooldownDuration'],
                'global_cooldown_duration' => $data[0]['globalCooldownDuration']
            ]
        );
    }

    public function deleteCommand($data)
    {
        $creatorId = UserUtils::getCreatorId($data['creatorName']  ?? null);

        Database::delete(
            $this::COMMANDS_MODEL,
            [
                'creator_id' => $creatorId,
                'name'       => $data[0]['name']
            ]
        );
    }

    public function updateCommandActivity($data)
    {
        $creatorId = UserUtils::getCreatorId($data['creatorName']  ?? null);

        Database::update(
            $this::COMMANDS_MODEL,
            [
                'creator_id' => $creatorId,
                'name'       => $data[0]['name']
            ],
            ['active' => $data[0]['active']]
        );
    }

    public function useCommand($data)
    {
        $creatorId = UserUtils::getCreatorId($data['creatorName']  ?? null);

        $command = Database::read(
            $this::COMMANDS_MODEL,
            [
                'creator_id' => $creatorId,
                'name'       => $data[0]['name']
            ],
            ['command_id', 'output', 'active', 'permissions', 'cost', 'user_cooldown_duration', 'global_cooldown_duration', 'global_last_used']
        );

        // TODO: Finish the function
        // 1. Is command active
        // 2. Cooldown? Both user and globally (2 different values)
        // 3. Does user have permissions for command?
        // 4. Does user have enough money?
        // 5. Decline user points
        // 6. Return command output
    }
}
