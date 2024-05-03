<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class BannedSongs extends Model
{
    protected $table = 'SongRequestBannedSongs';
    protected $primaryKey = 'song_request_banned_songs_id';
    protected $fillable = ["creator_id", "youtube_video_id"];
    protected $casts = [
        "creator_id"       => "integer",
        "youtube_video_id" => "string"
    ];
    public $timestamps = false;
}
