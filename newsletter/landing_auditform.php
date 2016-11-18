<!DOCTYPE html>
<html>
<head>

<!-- /.website title -->
<title>Free SEO Report from Return on Click</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<!-- CSS Files -->
<link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
<link href="css/font-awesome.min.css" rel="stylesheet">
<link href="fonts/icon-7-stroke/css/pe-icon-7-stroke.css" rel="stylesheet">
<link href="css/animate.css" rel="stylesheet" media="screen">
<link href="css/owl.theme.css" rel="stylesheet">
<link href="css/owl.carousel.css" rel="stylesheet">

<!-- Colors -->
<link href="css/css-index.css" rel="stylesheet" media="screen">
<!-- <link href="css/css-index-green.css" rel="stylesheet" media="screen"> -->
<!-- <link href="css/css-index-purple.css" rel="stylesheet" media="screen"> -->
<!-- <link href="css/css-index-red.css" rel="stylesheet" media="screen"> -->
<!-- <link href="css/css-index-orange.css" rel="stylesheet" media="screen"> -->
<!-- <link href="css/css-index-yellow.css" rel="stylesheet" media="screen"> -->

<!-- Google Fonts -->
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic" />

<style type="text/css">
	.audit_form_a .form label span {
		color: #CCC !important;
	}

</style>

</head>
  
<body data-spy="scroll" data-target="#navbar-scroll" >

<!-- /.preloader -->
<div id="preloader"></div>
<div id="top"></div>
<?php

if(isset($_GET['name']))
	$name = $_GET['name'];
else 
	$name = '';

if (isset($_GET['email']))
	$email = $_GET['email'];
else 
	$email = '';

if (isset($_GET['phone']))
	$phone = $_GET['phone'];
else
	$phone = '';

?>

<!-- /.parallax full screen background image -->
<div class="fullscreen landing parallax" style="background-image:url('images/people-working.jpg');" data-img-width="2000" data-img-height="1333" data-diff="100">
	
	<div class="overlay">
		<div class="container">

			<div class="row">
				<div class="col-md-7">
				
					<!-- /.logo -->
					<div class="logo wow fadeInDown"> <a href=""><img src="images/logo-white.png" alt="logo"></a></div>
					<div class="centered">
					<h2><span class="highlight">Use our </span> free audit tool</h2>
						<ul class="ul-address">
						<li class="ultext">to address issues on your site. </li>
						<li></li>
						<li><i class="pe-7s-map-marker"></i>Potts Point, NSW 2011</li>
						<li><i class="pe-7s-phone" ></i><a href="tel:1300021087" style="color: white;">1300 021 087</a></li>
						<li><i class="pe-7s-mail"></i><a href="mailto:sales@returnonclick.com.au">sales@returnonclick.com.au</a></li>
						<li><i class="pe-7s-look"></i><a href="http://www.returnonclick.com.au" target="_blank">www.returnonclick.com.au</a></li>
						</ul>
					</div>
	
		  

				</div> 
				
				<!-- /.signup form -->
				<div class="col-md-5">
				
					<div class="signup-header wow fadeInUp">
						<h3 class="form-title text-center">GENERATE FREE REPORT</h3>
						
						<!-- Begin MySiteAuditor -->
						<script src="//cdn.mysiteauditor.com/audit-tool.js" type="text/javascript"></script>
						<div id="seogroup-embed"  data-apikey="b4e414141ff37e50877af0a208aff5b0db0e87a7" data-language="english" data-type="responsive" ></div>
						<!-- End MySiteAuditor -->
						
						</div>
					</form>	
					</div>				
				
				</div>
			</div>
		</div> 
	</div> 
</div>
 

<!-- /.footer -->
<footer id="footer">
	<div class="container">
		<div class="col-sm-4 col-sm-offset-4">
			<!-- /.social links -->
				<!-- <div class="social text-center">
					<ul>
						<li><a class="wow fadeInUp" href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
						<li><a class="wow fadeInUp" href="https://www.facebook.com/" data-wow-delay="0.2s"><i class="fa fa-facebook"></i></a></li>
						<li><a class="wow fadeInUp" href="https://plus.google.com/" data-wow-delay="0.4s"><i class="fa fa-google-plus"></i></a></li>
						<li><a class="wow fadeInUp" href="https://instagram.com/" data-wow-delay="0.6s"><i class="fa fa-instagram"></i></a></li>
					</ul>
				</div>	 -->
			<div class="text-center wow fadeInUp" style="font-size: 14px;">&copy; Return On Click 2016</div>
			<a href="#" class="scrollToTop"><i class="pe-7s-up-arrow pe-va"></i></a>
		</div>	
	</div>	
</footer>
	
	<!-- /.javascript files -->
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/custom.js"></script>
    <script src="js/jquery.sticky.js"></script>
	<script src="js/wow.min.js"></script>
	<script src="js/owl.carousel.min.js"></script>
	<script>
		new WOW().init();
	</script>

	<script>
	 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	 })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	 ga('create', 'UA-55878006-4', 'auto');
	 ga('send', 'pageview');

	</script>

	<script type="text/javascript">
		function getParameterByName(name, url) {
		    if (!url) {
		      url = window.location.href;
		    }
		    name = name.replace(/[\[\]]/g, "\\$&");
		    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		        results = regex.exec(url);
		    if (!results) return null;
		    if (!results[2]) return '';
		    return decodeURIComponent(results[2].replace(/\+/g, " "));
		}
		function fillFields(){
			document.getElementById("seogroup-form-name").value = getParameterByName('name');
			document.getElementById("seogroup-form-email").value = getParameterByName('email');
			document.getElementById("seogroup-form-phone").value = getParameterByName('phone');
			$('#seogroup .audit_form_a .form input[type="submit"]').val("Generate My Report");
		}
		$( document ).ready(function() {
		    window.setTimeout(fillFields, 2500);
		});

	</script>
  </body>
</html>