<?php

namespace LundBot69Api\Models\ORM;

use Illuminate\Database\Eloquent\Model;

class Creators extends Model
{
    protected $table = 'Creators';
    protected $primaryKey = 'creator_id';
    protected $fillable = ["twitch_username", "refresh_token"];
    protected $casts = ["twitch_username" => "string", "refresh_token" => "string"];
    public $timestamps = false;
}
