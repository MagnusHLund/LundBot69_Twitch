<?php

namespace LundBot69Api\Utils;

use LundBot69Api\Utils\Constants;
use illuminate\Database\Capsule\Manager as Capsule;

use LundBot69Api\ORM_Models\BannedAccounts;
use LundBot69Api\ORM_Models\DefaultSongs;
use LundBot69Api\ORM_Models\SongRequests;
use LundBot69Api\ORM_Models\BannedSongs;
use LundBot69Api\ORM_Models\commands;
use LundBot69Api\ORM_Models\Creators;
use LundBot69Api\ORM_Models\Settings;
use LundBot69Api\ORM_Models\Points;

enum ModelEnum: string
{
    case BannedAccounts = BannedAccounts::class;
    case DefaultSongs = DefaultSongs::class;
    case SongRequests = SongRequests::class;
    case BannedSongs = BannedSongs::class;
    case commands = commands::class;
    case Creators = Creators::class;
    case Settings = Settings::class;
    case Points = Points::class;
}

class Database
{
    private $constants;

    public function __construct()
    {
        $this->constants = new Constants;
        $databaseInfo = $this->constants->GetDatabaseInfo();

        $capsule = new Capsule();

        $capsule->addConnection([
            'driver'    => 'mysql',
            'host'      => $databaseInfo["DB_HOST"],
            'database'  => $databaseInfo["DB_DATABASE"],
            'username'  => $databaseInfo["DB_USER"],
            'password'  => $databaseInfo["DB_PASSWORD"],
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix'    => '',
        ]);

        $capsule->setAsGlobal();
        $capsule->bootEloquent();
    }

    public static function create($model, $data)
    {
        $modelClass = ModelEnum::tryFrom($model)->value;
        return $modelClass::create($data);
    }

    public static function read($model, $conditions)
    {
        if (class_exists(Creators::class)) {
            echo "aaaaa";
        }
        $modelClass = ModelEnum::tryFrom($model)->value;
        $test = $modelClass::where($conditions)->get();
        return $test;
    }

    public static function update($model, $data, $conditions)
    {
        $modelClass = ModelEnum::tryFrom($model)->value;
        return $modelClass::where($conditions)->update($data);
    }

    public static function delete($model, $conditions)
    {
        $modelClass = ModelEnum::tryFrom($model)->value;
        return $modelClass::where($conditions)->delete();
    }
}
