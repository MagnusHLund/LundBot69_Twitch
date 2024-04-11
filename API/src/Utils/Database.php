<?php

namespace LundBot69Api\Utils;

use LundBot69Api\Utils\Constants;
use LundBot69Api\Utils\ModelMapper;
use Illuminate\Database\Capsule\Manager as Capsule;

class Database
{
    private static $capsule;

    public static function init()
    {
        $constants = new Constants();
        $databaseInfo = $constants->GetDatabaseInfo();

        self::$capsule = new Capsule();

        self::$capsule->addConnection([
            'driver'    => 'mysql',
            'host'      => $databaseInfo["DB_HOST"],
            'database'  => $databaseInfo["DB_DATABASE"],
            'username'  => $databaseInfo["DB_USER"],
            'password'  => $databaseInfo["DB_PASSWORD"],
            'charset'   => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix'    => '',
        ]);

        self::$capsule->setAsGlobal();
        self::$capsule->bootEloquent();
    }

    public static function create($model, $data)
    {
        $modelClass = ModelMapper::getModelClass($model);
        return $modelClass::create($data);
    }

    public static function read($model, $conditions, $column = null)
    {
        $modelClass = ModelMapper::getModelClass($model);
        if ($column) {
            return $modelClass::where($conditions)->value($column);
        }
        return $modelClass::where($conditions)->first();
    }

    public static function update($model, $conditions, $data)
    {
        $modelClass = ModelMapper::getModelClass($model);
        return $modelClass::where($conditions)->update($data);
    }

    public static function delete($model, $conditions)
    {
        $modelClass = ModelMapper::getModelClass($model);
        return $modelClass::where($conditions)->delete();
    }
}

Database::init();
