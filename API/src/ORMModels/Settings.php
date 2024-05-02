<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class Settings extends Model
{
    protected $table = 'settings';
    protected $primaryKey = 'settings_id';
    protected $fillable = ["creator_id", "bot_enabled", "gambling_enabled", "song_request_enabled"];
    protected $casts = [
        'creator_id'          => "integer",
        "bot_enabled"         => "boolean",
        "gambling_enabled"    => "boolean",
        "song_request_enabled" => "boolean",
    ];
}
