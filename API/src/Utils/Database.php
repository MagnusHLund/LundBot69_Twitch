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
        $databaseInfo = Constants::GetDatabaseInfo();

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
        try {
            $modelClass = ModelMapper::getModelClass($model);
            return $modelClass::create($data);
        } catch (\PDOException $e) {
            $stringifiedData = json_encode($data);
            $attemptedOperation = "Table: $model, Data: $stringifiedData";

            self::handlePdoException($e, $attemptedOperation);
        }
    }

    public static function read($model, $conditions, $columns = null, $limit = null, $random = false)
    {
        try {
            $modelClass = ModelMapper::getModelClass($model);
            $query = $modelClass::where($conditions);

            if ($columns) {
                $query->select(is_array($columns) ? $columns : [$columns]);
            }

            if ($random) {
                $query = $query->inRandomOrder();
            }

            if ($limit) {
                $query = $query->take($limit);
            }

            $result = $query->get();

            if ($result->isEmpty()) {
                throw new \PDOException("No data matching conditions.", 22002);
            }

            if ($result) {
                return $result->toArray();
            }
        } catch (\PDOException $e) {
            $stringifiedColumns = json_encode($columns);
            $stringifiedConditions = json_encode($conditions);
            $attemptedOperation = "Table: $model, Columns: $stringifiedColumns, Conditions: $stringifiedConditions";

            self::handlePdoException($e, $attemptedOperation);
        }
    }

    public static function update($model, $conditions, $data)
    {
        try {
            $modelClass = ModelMapper::getModelClass($model);
            return $modelClass::where($conditions)->update($data);
        } catch (\PDOException $e) {
            $stringifiedData = json_encode($data);
            $stringifiedConditions = json_encode($conditions);
            $attemptedOperation = "Table: $model, Data: $stringifiedData, Conditions: $stringifiedConditions";

            self::handlePdoException($e, $attemptedOperation);
        }
    }

    public static function delete($model, $conditions)
    {
        try {
            $modelClass = ModelMapper::getModelClass($model);
            $deletedRows = $modelClass::where($conditions)->delete();

            if ($deletedRows === 0) {
                throw new \PDOException("Attempted delete on non-existent row", 45001);
            }

            return $deletedRows;
        } catch (\PDOException $e) {
            $stringifiedConditions = json_encode($conditions);
            $attemptedOperation = "Table: $model, Conditions: $stringifiedConditions";

            self::handlePdoException($e, $attemptedOperation);
        }
    }

    private static function handlePdoException($e, $attemptedOperation)
    {
        http_response_code(400);

        switch ($e->getCode()) {
            case '22001':
                echo json_encode(['error' => 'The data is too long for one of the columns. ' . $attemptedOperation]);
                break;
            case '22002':
                echo json_encode(['error' => 'Read query returned empty.' . $attemptedOperation]);
                break;
            case '23000':
                echo json_encode(['error' => 'The data is either a duplicate or would fail due to foreign key constraints. ' . $attemptedOperation]);
                break;
            case '42S22':
                echo json_encode(['error' => 'Column not found. ' . $attemptedOperation]);
                break;
            case '45001':
                echo json_encode(['error' => 'Can not delete non-existent row. ' . $attemptedOperation]);
                break;
            default:
                http_response_code(500);
                echo json_encode(['error' => 'The insert failed due to an unknown reason. ' . $attemptedOperation]);
                break;
        }

        exit;
    }
}

Database::init();
