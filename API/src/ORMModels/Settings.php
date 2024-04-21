<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class Settings extends Model
{
    protected $table = 'settings';
    protected $primaryKey = 'SettingsID';
    protected $fillable = ["CreatorID", "BotEnabled", "GamblingEnabled", "SongRequestEnabled"];
    protected $casts = [
        'CreatorID'          => "integer",
        "BotEnabled"         => "boolean",
        "GamblingEnabled"    => "boolean",
        "SongRequestEnabled" => "boolean",
    ];
}
