<?php
/*Informacion para hacer la conexion a la base de datos */
$servername = "localhost";
$username = "root";
$password = null;
$dbname = "accesibilidad";

// Crear la conexion
$conexion = new mysqli($servername, $username, $password, $dbname);
// Verifica la conexion
if ($conexion->connect_error) {
    die("Connection failed: " . $conexion->connect_error);
} 
?>