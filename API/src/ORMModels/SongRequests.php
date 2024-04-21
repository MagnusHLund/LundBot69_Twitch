<?php

namespace LundBot69Api\ORMModels;

use Illuminate\Database\Eloquent\Model;

class SongRequests extends Model
{
    protected $table = 'songrequests';
    protected $primaryKey = 'RequestID';
    protected $fillable = ["CreatorID", "RequestUser", "SongLink"];
    protected $casts = [
        'CreatorID'   => "integer",
        "RequestUser" => "string",
        "SongLink"    => "string",
    ];
}
