<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class CommandUserCooldowns extends Model
{
    protected $table = 'CommandUserCooldowns';
    protected $primaryKey = 'command_user_cooldown_id';
    protected $fillable = [
        "command_id",
        "used_by",
        "last_used",
    ];
    protected $casts = [
        "command_id" => "int",
        "used_by"    => "string",
        "last_used"  => "string",
    ];
    public $timestamps = false;
}
