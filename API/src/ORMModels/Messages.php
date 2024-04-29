<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class Messages extends Model
{
    protected $table = 'Messages';
    protected $primaryKey = 'message_id';
    protected $fillable = ["fk_creator_id", "name", "output", "repeat_message"];
    protected $casts = [
        'fk_creator_id'  => "integer",
        "name"           => "string",
        "output"         => "string",
        "repeat_message" => "integer"
    ];
}
