<?php

namespace LundBot69Api\Models\ORM;

use Illuminate\Database\Eloquent\Model;

class Creators extends Model
{
    protected $table = 'Creators';
    protected $primaryKey = 'creator_id';
    protected $fillable = ["twitch_username"];
    protected $casts = ["twitch_username" => "string"];
    public $timestamps = false;
}
