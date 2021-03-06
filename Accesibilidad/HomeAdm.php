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
		<!-- Verifica que sea el administrador para entrar a esta seccion   -->
		<?php if(isset($_SESSION['Admin'])){ ?>
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
									<h1 class="cover-heading">TCU Accesibilidad para todos en el cantón de Montes de Oca</h1>
									
										    <!-- Carousel de fotos de pagina de inicio
											================================================== -->
											<div id="myCarousel" class="carousel slide" data-ride="carousel">
											  <!-- Indicators -->
											  <ol class="carousel-indicators">
												<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
												<li data-target="#myCarousel" data-slide-to="1"></li>
												<li data-target="#myCarousel" data-slide-to="2"></li>
											  </ol>
											  <div class="carousel-inner" role="listbox">
												<div class="item active">
												  
												  <div class="container">
												  <img class="first-slide" src="images/imagen_1.jpg" width="500" height="400" alt="First slide">
													<div class="carousel-caption">
													 
													  
													</div>
												  </div>
												</div>
												<div class="item">
												  
												  <div class="container">
												  <img class="second-slide" src="images/chaman.jpg" width="500" height="400" alt="Second slide">
													<div class="carousel-caption">
													  
													</div>
												  </div>
												</div>
												<div class="item">
												  <div class="container">
												  <img class="third-slide" src="images/tigre.jpg" width="500" height="400" alt="Third slide">
													<div class="carousel-caption">
													  
													</div>
												  </div>
												</div>
											  </div>
											  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
												<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
												<span class="sr-only">Previous</span>
											  </a>
											  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
												<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
												<span class="sr-only">Next</span>
											  </a>
											</div><!-- /.carousel -->

									<p class="lead">
									<button type="button" class="btn btn-lg btn-info" onClick="window.location.href='mapita.html'">
									<!--Imagen de mapa en png transparente, botón que abre el visor de mapas -->
									<img src="images/mapa.png" width="60" height="50" alt="">
									</button>
																
					
									</p>
								</div>
							</div>					  					
							<!--Divisiones tres columnas -->					
							<div class="container marketing">
								<div class="row">
									<div class="col-lg-4">
										<img class="img-circle" src="images/imagen_2.jpg" alt="Generic placeholder image" width="140" height="140">
										<h2>Misión</h2>
										<p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
										<p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
									</div><!-- /.col-lg-4 -->
									
									<div class="col-lg-4">
										<img class="img-circle" src="images/vision.jpg" alt="Generic placeholder image" width="140" height="140">
										<h2>Visión</h2>
										<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
										<p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
									</div><!-- /.col-lg-4 -->
									
									<div class="col-lg-4">
										<img class="img-circle" src="images/metas.jpg" alt="Generic placeholder image" width="140" height="140">
										<h2>Metas</h2>
										<p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
										<p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
									</div><!-- /.col-lg-4 -->	
								</div><!-- /.row -->						
							</div>
							<!--Divisiones tres columnas -->
						</div>
					</div>
				<!-- FOOTER Etiqueta -->
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
