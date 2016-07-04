<?php
	include('conexion.php');
	echo "
		<form action='forgot_pass.php' method='POST'>
		Enter your username <br> <input type ='text' name='ussername'><p>
		Enter your email <br> <input type ='email'><p>
		<input type='submit' value='Submit' name='submit'>
		</form>
	";
	if(isset($_POST['submit'])){
		$username = $_POST('username');
		$email = $_POST('email');
		$query = "SELECT * FROM usuarios WHERE usuario='$username'";
		$resultado = $conexion -> query($query);
		$numrow= mysqli_num_rows($resultado);
		if($numrow!=0){
			while(){
				
				
			}
			
		}else{
			echo "No tiene permisos";
		}
	}

?>
