<?php

namespace App\Controllers;

use PDO;

class TipoSolicitacaoController
{
    private $conn;

    public function __construct(PDO $conn)
    {
        $this->conn = $conn;
    }

    public function getTipoSolicitacao()
    {
        $stmt = $this->conn->prepare('SELECT id, descricao, status FROM tipoSolicitacao');
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}