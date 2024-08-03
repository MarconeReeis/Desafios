<?php

namespace App\Models;

class Paciente
{
    public $id;
    public $nome;
    public $dataNasc;
    public $CPF;
    public $status;

    public function __construct($id, $nome, $dataNasc, $CPF, $status)
    {
        $this->id = $id;
        $this->nome = $nome;
        $this->dataNasc = $dataNasc;
        $this->CPF = $CPF;
        $this->status = $status;
    }
}