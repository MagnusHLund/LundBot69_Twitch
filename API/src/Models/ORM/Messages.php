<?php

namespace LundBot69Api\Models\ORM;

use illuminate\database\Eloquent\Model;

class Messages extends Model
{
    protected $table = 'Messages';
    protected $primaryKey = 'message_id';
    protected $fillable = ["creator_id", "name", "output", "repeat_message"];
    protected $casts = [
        'creator_id'     => "integer",
        "name"           => "string|max:50",
        "output"         => "string|max:500",
        "repeat_message" => "integer"
    ];
    public $timestamps = false;
}
