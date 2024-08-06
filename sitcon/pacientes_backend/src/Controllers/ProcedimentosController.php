<?php

namespace App\Controllers;

use PDO;

class ProcedimentosController
{
    private $conn;

    public function __construct(PDO $conn)
    {
        $this->conn = $conn;
    }

    public function getProcedimentos()
    {
        $stmt = $this->conn->prepare('SELECT id, descricao, tipo_id, status FROM procedimentos');
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}