<?php

namespace LundBot69Api\Models\ORM;

use illuminate\database\Eloquent\Model;

class Points extends Model
{
    protected $table = 'Points';
    protected $primaryKey = 'points_id';
    protected $fillable = [
        "creator_id",
        "twitch_username",
        "points"
    ];
    protected $casts = [
        'creator_id'      => "integer",
        "twitch_username" => "string|max:25",
        "points"          => "integer",
    ];
    public $timestamps = false;
}
