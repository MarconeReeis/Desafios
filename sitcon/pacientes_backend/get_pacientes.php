<?php

require 'db.php';

try {
    $stmt = $conn->query('SELECT * FROM pacientes');
    $pacientes = $stmt->fetchAll(PDO::FETCH_ASSOC);
    header('Content-Type: application/json');
    echo json_encode($pacientes);
} catch(PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}