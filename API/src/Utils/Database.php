<?php

namespace LundBot69Api\Utils;

use LundBot69Api\Utils\Constants;
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

    // TODO: Create an ORM query.
}
