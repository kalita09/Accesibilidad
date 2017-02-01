<?php

$usuario = $_POST['usuario'];
$contrasena = $_POST['password'];
echo $usuario;
echo $contrasena;
include('conexion.php');

/*Consulta a la base de datos*/
$sqlAdmin = "SELECT * FROM usuarios WHERE usuario='$usuario' AND clave='$contrasena' ";
$admin = $conexion->query($sqlAdmin);

/*Verifica que sea un usuario administrador, para desplegar la pagina correspondiente*/
if($resultadoAdmin= mysqli_fetch_array($admin)){
	session_start();
	$_SESSION['Admin']=$usuario;
	header('Location: HomeAdm.php');

}else{
	
	header('Location: index.php');
	
}

?>