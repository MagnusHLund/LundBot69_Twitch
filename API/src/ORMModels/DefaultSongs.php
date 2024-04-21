<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class DefaultSongs extends Model
{
    protected $table = 'defaultsongs';
    protected $primaryKey = 'SongID';
    protected $fillable = ["CreatorID", "SongLink", "SongTitle"];
    protected $casts = [
        'CreatorID'  => "integer",
        "SongLink"   => "string",
        "SongTitle"  => "string"
    ];
}
