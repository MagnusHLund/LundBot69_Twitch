<?php

namespace LundBot69Api\Utils;

use LundBot69Api\Utils\Constants;
use LundBot69Api\Utils\ModelMapper;
use illuminate\Database\Capsule\Manager as Capsule;

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
        $modelClass = ModelMapper::getModelClass($model);
        return $modelClass::create($data);
    }

    public static function read($model, $conditions)
    {
        $modelClass = Database::getModelClass($model);
        $test = $modelClass::where($conditions)->get();
        return $test;
    }

    public static function update($model, $data, $conditions)
    {
        $modelClass = ModelMapper::getModelClass($model);
        return $modelClass::where($conditions)->update($data);
    }

    public static function delete($model, $conditions)
    {
        $modelClass = ModelMapper::getModelClass($model);
        return $modelClass::where($conditions)->delete();
    }

    const MODELS = [
        'BannedAccounts' => \LundBot69Api\ORMModels\BannedAccounts::class,
        'DefaultSongs' => \LundBot69Api\ORMModels\DefaultSongs::class,
        'SongRequests' => \LundBot69Api\ORMModels\SongRequests::class,
        'BannedSongs' => \LundBot69Api\ORMModels\BannedSongs::class,
        'Commands' => \LundBot69Api\ORMModels\Commands::class,
        'Creators' => \LundBot69Api\ORMModels\Creators::class,
        'Settings' => \LundBot69Api\ORMModels\Settings::class,
        'Points' => \LundBot69Api\ORMModels\Points::class,
    ];

    public static function getModelClass($model)
    {
        return self::MODELS[$model] ?? null;
    }
}
