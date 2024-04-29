<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class DefaultSongs extends Model
{
    protected $table = 'DefaultSongs';
    protected $primaryKey = 'song_id';
    protected $fillable = ["fk_creator_id", "youtube_video_id", "play_order"];
    protected $casts = [
        "fk_creator_id"   => "integer",
        "youtube_video_id" => "string",
        "play_order"      => "string"
    ];
}
