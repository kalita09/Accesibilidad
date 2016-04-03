<?php

$usuario = $_POST['usuario'];
$contrasena = $_POST['password'];
echo $usuario;
echo $contrasena;
include('conexion.php');


$sqlAdmin = "SELECT * FROM usuarios WHERE usuario='$usuario' AND clave='$contrasena' ";
$admin = $conexion->query($sqlAdmin);


if($resultadoAdmin= mysqli_fetch_array($admin)){
	session_start();
	$_SESSION['Admin']=$usuario;
	header('Location: HomeAdm.php');

}else{
	
	header('Location: index.php');
	
}
/*
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["Carnet"]. " - Name: " . $row["NombreEstudiante"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();*/


?>