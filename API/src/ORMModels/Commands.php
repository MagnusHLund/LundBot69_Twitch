<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class Commands extends Model
{
    protected $table = 'Commands';
    protected $primaryKey = 'command_id';
    protected $fillable = [
        "creator_id",
        "name",
        "output",
        "active",
        "permissions",
        "cost",
        "user_cooldown_duration",
        "global_cooldown_duration",
        "global_last_used"
    ];
    protected $casts = [
        "creator_id"               => "int",
        "name"                     => "string",
        "output"                   => "string",
        "active"                   => "boolean",
        "permission"               => "integer",
        "cost"                     => "integer",
        "user_cooldown_duration"   => "integer",
        "global_cooldown_duration" => "integer",
        "global_last_used"         => "integer",
    ];
    public $timestamps = false;
}
