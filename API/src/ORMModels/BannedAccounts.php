<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class BannedAccounts extends Model
{
    protected $table = 'SongRequestBannedAccounts';
    protected $primaryKey = 'song_request_banned_accounts_id';
    protected $fillable = ["creator_id", "twitch_username"];
    protected $casts = [
        "creator_id"   => "integer",
        "twitch_username" => "string"
    ];
}
