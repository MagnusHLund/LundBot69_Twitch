<?php

namespace LundBot69Api\ORMModels;

use Illuminate\Database\Eloquent\Model;

class Creators extends Model
{
    protected $table = 'creators';
    protected $primaryKey = 'CreatorID';
    protected $fillable = ["Username"];
    protected $casts = ["Username"  => "string"];
}
