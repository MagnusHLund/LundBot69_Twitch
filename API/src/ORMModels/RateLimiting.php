<?php

namespace LundBot69Api\ORMModels;

use illuminate\database\Eloquent\Model;

class RateLimiting extends Model
{
    public $timestamps = false;
    protected $table = 'ratelimiting';
    protected $fillable = ["IpAddress", "LastAttemptTime"];
}
