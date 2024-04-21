<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class RateLimiting extends Model
{
    public $timestamps = false;
    protected $table = 'ratelimiting';
    protected $primaryKey = 'RateLimitingID';
    protected $fillable = ["IpAddress", "LastAttemptTime"];
    protected $casts = [
        'IpAddress'       => "string",
        "LastAttemptTime" => "integer",
    ];
}
