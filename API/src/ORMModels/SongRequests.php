<?php

namespace LundBot69Api\ORMModels;

use Illuminate\Database\Eloquent\Model;

class SongRequests extends Model
{
    protected $table = 'SongRequest';
    protected $primaryKey = 'song_request_id';
    protected $fillable = ["fk_creator_id", "requested_by", "youtube_video_id", "requested_at"];
    protected $casts = [
        'fk_creator_id'    => "integer",
        "requested_by"     => "string",
        "youtube_video_id" => "string",
        "requested_at"     => "integer"
    ];
}
