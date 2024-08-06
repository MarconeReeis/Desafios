<?php

namespace App\Models;

class Procedimento
{
    public $id;
    public $descricao;
    public $tipo_id;
    public $status;

    public function __construct($id, $descricao, $tipo_id, $status)
    {
        $this->id = $id;
        $this->descricao = $descricao;
        $this->tipo_id = $tipo_id;
        $this->status = $status;
    }
}