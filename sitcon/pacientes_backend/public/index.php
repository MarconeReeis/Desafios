<?php

require '../src/config/db.php';
require '../src/Controllers/PacientesController.php';

use App\Controllers\PacientesController;

$controller = new PacientesController($conn);
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
header('Content-Type: application/json');
echo json_encode($controller->getPacientes($page));