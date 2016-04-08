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
		<?php session_start(); ?>

		<?php if(isset($_SESSION['Admin'])){ ?>

		<?php
		include('conexion.php');
        
        $query = "SELECT * FROM mensajes "; //POR SEGURIDAD ESTO HAY QUE CORREGIRLO Y QUITAR EL *
        $resultado=$conexion -> query($query);
        ?>

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
											  <a class="navbar-brand" href="#"><?php echo "Bienvenido ".$_SESSION['Admin'];   ?></a>
											  <img src="images/logo.png" width="50" height="50">	  
								</div>
								
								<div id="navbar" class="navbar-collapse collapse">
											
									<ul class="nav navbar-nav">
										<li class="active"><a href="HomeAdm.php">Inicio</a></li>
										
										<li class="dropdown">
											<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Ver<span class="caret"></span></a>
											<ul class="dropdown-menu">
												<li><a href="mensajes.php">Mensajes</a></li>
												<li><a href="#">Denunciar</a></li>
												<li><a href="#">Ayuda</a></li>
											</ul>
										</li>
										<form class="navbar-form navbar-right">
                        					<a href="cerrar.php" class="btn btn-primary" role ="button">Salir</a>
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
								<div class="inner cover">
									<h1 class="cover-heading">Mensajes</h1>
										<div class="table-responsive">
					                        <table class="table table-striped">
					                        <thead>
					                            <tr>
					                                <td><b>Id</b></td>
					                                <td><b>Asunto</b></td>  
					                            </tr>
					                        </thead>
					                        <tbody>
					                            <?php while($row=$resultado->fetch_assoc()){ ?>
					                                <tr>
					                                    <td>
					                                        <?php echo $row['Id'];?>
					                                    </td>
					                                    <td>
					                                        <?php echo $row['Asunto'];?>
					                                    </td>
					                                    <td>
					                                        <a href="verMensaje.php?idMensaje=<?php echo $row['Id'];?>" role="button" class="label label-info" >Ver</a>
					                                    </td>
					                                </tr>
					                            <?php } ?>
					                        </tbody>
					                    </table>
                				 	</div>	
								</div>
							</div>				
						</div>
					</div>
				<!-- FOOTER -->
				<footer>
					<p>&copy; 2015 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
				</footer>
			</div>

	     <?php   }else{
	        header("Location: index.php");
	      } ?>
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
