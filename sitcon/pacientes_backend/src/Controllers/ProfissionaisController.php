<?php

namespace App\Controllers;

use PDO;

class ProfissionaisController
{
    private $conn;

    public function __construct(PDO $conn)
    {
        $this->conn = $conn;
    }

    public function getProfissionais()
    {
        $stmt = $this->conn->prepare('SELECT id, nome AS descricao FROM profissional WHERE status = "ativo"');
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}