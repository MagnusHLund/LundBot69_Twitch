<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class Points extends Model
{
    protected $table = 'points';
    protected $primaryKey = 'PointID';
    protected $fillable = ["CreatorID", "TwitchUsername", "Points"];
    protected $casts = [
        'CreatorID'      => "integer",
        "TwitchUsername" => "string",
        "Points"         => "integer",
    ];
}
