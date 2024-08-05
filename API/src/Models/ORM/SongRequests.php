<?php

namespace LundBot69Api\Models\ORM;

use Illuminate\Database\Eloquent\Model;

class SongRequests extends Model
{
    protected $table = 'SongRequest';
    protected $primaryKey = 'song_request_id';
    protected $fillable = ["creator_id", "requested_by", "youtube_video_id", "requested_at"];
    protected $casts = [
        'creator_id'       => "integer",
        "requested_by"     => "string|max:25",
        "youtube_video_id" => "string|max:11",
        "requested_at"     => "integer"
    ];
    public $timestamps = false;
}
