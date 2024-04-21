<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class BannedSongs extends Model
{
    protected $table = 'bannedsongs';
    protected $primaryKey = 'BannedSongID';
    protected $fillable = ["CreatorID", "SongLink"];
    protected $casts = [
        'CreatorID' => "integer",
        "SongLink"  => "string"
    ];
}
