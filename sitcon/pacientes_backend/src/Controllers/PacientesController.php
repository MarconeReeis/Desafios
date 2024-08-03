<?php

namespace App\Controllers;

use PDO;

class PacientesController
{
    private $conn;

    public function __construct(PDO $conn)
    {
        $this->conn = $conn;
    }

    public function getPacientes($page = 1, $limit = 10)
    {
        $offset = ($page - 1) * $limit;
        $stmt = $this->conn->prepare('SELECT id, nome, dataNasc, CPF, status FROM pacientes LIMIT :limit OFFSET :offset');
        $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
        $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}