<?php

require '../src/config/db.php';
require '../src/Controllers/PacientesController.php';
require '../src/Controllers/TipoSolicitacaoController.php';
require '../src/Controllers/ProcedimentosController.php';
require '../src/Controllers/ProfissionaisController.php';
use App\Controllers\PacientesController;
use App\Controllers\TipoSolicitacaoController;
use App\Controllers\ProcedimentosController;
use App\Controllers\ProfissionaisController;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : '';

switch ($endpoint) {
    case 'pacientes':
        $controller = new PacientesController($conn);
        $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
        header('Content-Type: application/json');
        echo json_encode($controller->getPacientes($page));
        break;

    case 'tipoSolicitacao':
        $controller = new TipoSolicitacaoController($conn);
        header('Content-Type: application/json');
        echo json_encode($controller->getTipoSolicitacao());
        break;

    case 'procedimentos':
        $controller = new ProcedimentosController($conn);
        header('Content-Type: application/json');
        echo json_encode($controller->getProcedimentos());
        break;

    case 'profissionais':
        $controller = new ProfissionaisController($conn);
        header('Content-Type: application/json');
        echo json_encode($controller->getProfissionais());
        break;

    default:
        header('HTTP/1.1 404 Not Found');
        echo json_encode(['error' => 'Endpoint não encontrado']);
        break;
}