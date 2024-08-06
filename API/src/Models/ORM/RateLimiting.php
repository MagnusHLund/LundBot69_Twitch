<?php

namespace LundBot69Api\Models\ORM;

use illuminate\database\Eloquent\Model;

class RateLimiting extends Model
{
    protected $table = 'RateLimiting';
    protected $primaryKey = 'rate_limiting_id';
    protected $fillable = [
        "ip_address",
        "last_attempted_time"
    ];
    protected $casts = [
        'ip_address'          => "string|max:39",
        "last_attempted_time" => "integer",
    ];
    public $timestamps = false;
}
