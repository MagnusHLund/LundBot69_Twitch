<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class Giveaways extends Model
{
    protected $table = 'Giveaways';
    protected $primaryKey = 'giveaway_id';
    protected $fillable = ["creator_id", "participant"];
    protected $casts = [
        'creator_id'  => "integer",
        "participant" => "string",
    ];
    public $timestamps = false;
}
