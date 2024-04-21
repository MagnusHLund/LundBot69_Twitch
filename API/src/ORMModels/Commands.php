<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class Commands extends Model
{
    // Do I even use OutputType anymore?
    protected $table = 'commands';
    protected $primaryKey = 'CommandID';
    protected $fillable = [
        "CreatorID",
        "Name",
        "Output",
        "Active",
        "Permission",
        "OutputType",
        "Cost",
        "UserCooldown",
        "GlobalCooldown",
        "Repeat"
    ];
    protected $casts = [
        'CreatorID'      => "int",
        "Name"           => "string",
        "Output"         => "string",
        "Active"         => "boolean",
        "Permission"     => "integer",
        "OutputType"     => "integer",
        "Cost"           => "integer",
        "UserCooldown"   => "integer",
        "GlobalCooldown" => "integer",
        "Repeat"         => "integer",
    ];
}
