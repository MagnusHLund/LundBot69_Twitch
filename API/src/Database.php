<?php

class Database {

    private $host = '89.150.146.79';
    private $username = 'LundBot69';
    private $password = '@6Z8HhDo29zDP2sAB9Yub';
    private $database = 'lundbot69';
    private $conn;

    public function __construct() {
        require_once realpath(__DIR__ . '/vendor/autoload.php');
        $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
        $dotenv->load();
        try {
            $dsn = "mysql:host={$this->host};dbname={$this->database}";
            $this->conn = new PDO($dsn, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Connection failed: " . $e->getMessage());
        }
    }

    public function query($query, $params = []) {
        try {
            $stmt = $this->conn->prepare($query);
            $stmt->execute($params);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die("Query failed: " . $e->getMessage());
        }
    }
}