<?php

namespace LundBot69Api\Models\ORM;

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
        "command_id" => "integer",
        "used_by"    => "string|max:25",
        "last_used"  => "integer",
    ];
    public $timestamps = false;
}
