<!DOCTYPE html>
<html lang="es">
	<head>
	
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		<meta name="description" content="">
		<meta name="author" content="">
		<link rel="icon" href="../../favicon.ico">

		<title>Montes de Oca accesible</title>

		<!-- Bootstrap core CSS -->
		<link href="css/bootstrap.min.css" rel="stylesheet">

		<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
		<link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">

		<!-- Custom styles for this template -->
		<link href="jumbotron-narrow.css" rel="stylesheet">
		<link href="css/cover.css" rel="stylesheet">

		<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
		<!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
		<script src="js/ie-emulation-modes-warning.js"></script>
		<script src="js/layers-accesibilidad.js"></script>
		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>

	<body>
	<div class="container">
		<!-- Barra de navegación -->
		<div class="navbar-wrapper">
			<div class="container">

				<nav class="navbar navbar-inverse navbar-static-top">
					<div class="container">
						<div class="navbar-header">
									  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
										<span class="sr-only">Toggle navigation</span>
										<span class="icon-bar">dfd</span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										
									  </button>
									  <img src="images/logo.png" width="50" height="50">
									  
									  
						</div>
						
						<div id="navbar" class="navbar-collapse collapse">
									
							<ul class="nav navbar-nav">
								<li class="active"><a href="index.php">Inicio</a></li>
								<li><a href="acerca.php">Acerca de</a></li>
								<li><a href="contacto.php">Contacto</a></li>
								<li class="dropdown">
									<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Opciones<span class="caret"></span></a>
									<ul class="dropdown-menu">
										<li><a href="#">Consultar</a></li>
										<li><a href="denunciar.php">Denunciar</a></li>
										<li><a href="#">Ayuda</a></li>
									</ul>
								</li>
								<form action="login.php" method="POST" class="navbar-form navbar-right">
		                    		<div class="form-group">
		                      			<input type="text" name="usuario" id="inputUser" class="form-control" placeholder="usuario" required autofocus>
		                    		
		                    		
		                      			<input type="password" name="password" id="inputPassword" class="form-control" placeholder="password" required>
		                    		
		                    		<button type="submit" class="btn btn-success">Entrar</button>
		                    		</div>
		                  		</form>

							</ul>
 
						</div>
					</div>
				</nav>

			</div>
		</div>
		<!-- Fin Barra de navegación -->
		
		
  
		

			<div class="site-wrapper-inner">

				<div class="cover-container">
					<div class="container">

					<?php
					 include('conexion.php');

        			$asunto = $_POST['asunto'];
        			$mensaje = $_POST['mensaje'];
        			$nomfoto =$_FILES["foto"]["name"];
        			$ruta = $_FILES["foto"]["tmp_name"];
        			$destino="fotos/".$nomfoto;
        			copy ($ruta,$destino);

					$sqldenuncia = "INSERT INTO mensajes (Asunto,Mensaje,foto) VALUES ('$asunto','$mensaje','$destino') ";
					if ( ! $result = $conexion->query($sqldenuncia))
                            {
                            echo "<a href=index.html>Error al enviar el mensaje intentelo más tarde</a>";
                            printf("Connect failed: %s\n", $conexion->error);

                    }else{
                                echo "<h1> El mensaje se envió exitosamente </h1> <br>";
                                $prestamoActivo=mysqli_insert_id($conexion);

					}



					?>







					</div>
										  
											
										
										
										
						

				</div>
			</div>
		<!-- FOOTER -->
		<footer>
			<p>&copy; 2015 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
		</footer>

	</div>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/ie10-viewport-bug-workaround.js"></script>
	
	</body>
</html>
