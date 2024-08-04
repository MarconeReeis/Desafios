<?php

require '../src/config/db.php';
require '../src/Controllers/PacientesController.php';

use App\Controllers\PacientesController;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$controller = new PacientesController($conn);
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
header('Content-Type: application/json');
echo json_encode($controller->getPacientes($page));