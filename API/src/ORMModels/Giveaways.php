<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class Giveaways extends Model
{
    protected $table = 'giveaways';
    protected $primaryKey = 'GiveawayID';
    protected $fillable = ["CreatorID", "Participant"];
    protected $casts = [
        'CreatorID'   => "integer",
        "Participant" => "string",
    ];
}
