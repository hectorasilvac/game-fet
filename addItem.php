<?php

require_once('./dbconnection.php');

$stmt = $conn->prepare("INSERT INTO players (nombre_x, apellido_x, nombre_o, apellido_o, ganador, empate) VALUES (:nombre_x, :apellido_x, :nombre_o, :apellido_o, :ganador, :empate)");

$stmt->bindParam(':nombre_x', $_POST['nombre_x']);
$stmt->bindParam(':apellido_x', $_POST['apellido_x']);
$stmt->bindParam(':nombre_o', $_POST['nombre_o']);
$stmt->bindParam(':apellido_o', $_POST['nombre_o']);
$stmt->bindParam(':ganador', $_POST['ganador']);
$stmt->bindParam(':empate', $_POST['empate']);

// Excecute
$stmt->execute();