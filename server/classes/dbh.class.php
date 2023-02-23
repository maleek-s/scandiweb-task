<?php

include('./includes/config.php');
class Dbh {

private $host = host;
private $user = user;
private $pwd = pwd;
private $dbName = dbName;


    public function connect() {
        try {
            $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbName;
            $pdo = new PDO($dsn, $this->user, $this->pwd);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        } catch(\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}