<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class RateLimiting extends Model
{
    public $timestamps = false;
    protected $table = 'RateLimiting';
    protected $primaryKey = 'rate_limiting_id';
    protected $fillable = ["ip_address", "last_attempted_time"];
    protected $casts = [
        'ip_address'          => "string",
        "last_attempted_time" => "integer",
    ];
}
