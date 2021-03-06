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

    <title>Acerca de</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/cover.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

<body>
	<div class="navbar-wrapper">
	<div class="container">
		<!-- Barra de navegación -->
		
				<nav class="navbar navbar-inverse navbar-fixed-top">
					<div class="container">
						<div class="navbar-header">
							
									  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
										<span class="sr-only">Toggle navigation</span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									  </button>
									  
									  <a href="index.php">
									  <img src="images/logo.png" width="50" height="50">	
									  </a>
							</form>
						</div>					
						<div id="navbar" class="navbar-collapse collapse">
								
								<ul class="nav navbar-nav navbar-left">
							
									<li class="active"><a href="index.php">Inicio</a></li>
									<li><a href="acerca.php">Acerca de</a></li>
									<li><a href="contacto.php">Contacto</a></li>
									<li class="dropdown">
										<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Opciones<span class="caret"></span></a>
										<ul class="dropdown-menu">
											<li><a href="#">Consultar</a></li>
											<li><a href="denunciar.php">Denunciar</a></li >
											<li><a href="#">Ayuda</a></li>
										</ul>
									</li>
								</ul>
								<ul class="nav navbar-nav navbar-right">
									<li><a href="#" data-toggle="collapse" data-target="#formulario"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
								</ul>
								<div id="formulario" class="collapse">
									<form  action="login.php" method="POST" >	
										<ul class="navbar-form navbar-right">
											<div class="form-group">
												<input type="text" name="usuario" id="inputUser" class="form-control" placeholder="usuario" required autofocus>
												<input type="password" name="password" id="inputPassword" class="form-control" placeholder="password" required>
												<button type="submit" class="btn btn-success">Entrar</button>
												
											</div>
										</ul>
									</form>
								</div>
							
						</div>
					</div>
				</nav>

	</div>
	</div>
	<!-- Fin Barra de navegación -->
  
    <div class="site-wrapper">

      <div class="site-wrapper-inner">

        <div class="cover-container">

          <div class="inner cover">
            <h1 class="cover-heading">Acerca de</h1>
			
          </div>

          <div class="mastfoot">
            <div class="inner">
              <p>Cover template for <a href="http://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
            </div>
          </div>

        </div>

      </div>

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
