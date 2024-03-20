<?php

namespace LundBot69Api\Utils;

use PDO;
use PDOException;

use LundBot69Api\Utils\Constants;

class Database
{
    private $conn;
    private $constants;

    public function __construct()
    {
        $this->constants = new Constants;
        $databaseInfo = $this->constants->GetDatabaseInfo();

        try {
            $dsn = "mysql:host=" . $databaseInfo["DB_HOST"] . ";dbname=" . $databaseInfo["DB_DATABASE"];
            $this->conn = new PDO($dsn, $databaseInfo["DB_USER"], $databaseInfo["DB_PASSWORD"]);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "SUCCESS";
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    // TODO: For all queries, it would probably be best to use an ORM. Sounds like version 2 stuff. 
    public function query($query, $params = [])
    {
        try {
            $stmt = $this->conn->prepare($query);
            $stmt->execute($params);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo ("Query failed: " . $e->getMessage());
        }
    }
}
