<?php

namespace App\Models;

class Profissional
{
    public $id;
    public $nome;
    public $status;

    public function __construct($id, $nome, $status)
    {
        $this->id = $id;
        $this->nome = $nome;
        $this->status = $status;
    }
}