<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class BannedAccounts extends Model
{
    protected $table = 'bannedaccounts';
    protected $primaryKey = 'BannedAccountID';
    protected $fillable = ["CreatorID", "TwitchUsername"];
    protected $casts = [
        'CreatorID'      => "integer",
        "TwitchUsername" => "string"
    ];
}
