<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Return on Click</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="">
    <meta name="description" content="">
    <link rel="canonical" href="">
    <link rel="shortlink" href="">
    <link rel="author" href="">
    <meta property="og:site_name" content="Return on Click">
    <meta property="og:type" content="website">
    <meta property="og:url" content="http://www.returnonclick.com.au">
    <meta property="og:title" content="Return on Click">
    <meta property="og:description" content="">
    <meta property="og:updated_time" content="">
    <meta property="og:image" content="">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@returnonclick">
    <meta name="twitter:site:id" content="">
    <meta name="twitter:url" content="http://www.returnonclick.com.au">
    <meta name="twitter:title" content="Return on Click">
    <meta name="twitter:description" content="A">
    <meta name="twitter:image:src" content="">
    <meta name="twitter:image:width" content="1500">
    <meta name="twitter:image:height" content="1500">
    <link rel="apple-touch-icon-precomposed" href="">
    <link rel="icon" type="image/png" sizes="32x32" href="../docs/images/favicon-32x32.png">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="../components/bootstrap/css/bootstrap.min.css">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="../components/font-awesome/css/font-awesome.min.css">

    <!-- JQUERY -->
    <script src="../components/jquery/jquery-2.2.3.min.js"></script>

    <!-- main CSS -->
    <link rel="stylesheet" href="../docs/styles/main.css">
    <!-- <link rel="stylesheet" href="../docs/styles/animate.css">
    <link rel="stylesheet" href="../docs/styles/icons.css"> -->

    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-55878006-1', 'auto');
        ga('send', 'pageview');

    </script>

</head>


<body>


<!-- HEADER -->
<header class="container header-main-page">
    <?php include './templates/header-white.php'; ?>
</header>

<!-- MENU -->
<nav class="cd-primary-nav">
    <?php include './templates/menu.php'; ?>
</nav>


    <div id="header-contact">
        <div class="row row-centered">
            <div class="container-fluid">
                <div class="row">
                    <div id="form-contact" class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                        <h1>EMAIL US</h1>
                        <div class="row">
                            <div class="form-group col-md-4 col-sm-4 col-xs-12">
                                <input type="text" class="form-control form-field" id="contactName" name="contactName" placeholder="Name" required >
                            </div>
                            <div class="form-group col-md-4 col-sm-4 col-xs-12">
                                <input type="text" class="form-control form-field" id="email" name="email" placeholder="Email" required >
                            </div>
                            <div class="form-group col-md-4 col-sm-4 col-xs-12">
                                <input type="text" class="form-control form-field" id="phone" name="phone" placeholder="Phone" required >
                            </div>
                        </div>
                        <div class="row">
                            <a href="#" class="btn-forms btn-black" data-form="form-contact" data-url="../../source/php/contact.php">send</a>
                        </div>
                    </div>
                </div>
                <p class="load-message-form-contact"></p>
            </div>
        </div>
    </div>

<!-- MESSAGES -->
<?php include './templates/messages.php'; ?>


    <!-- Bootstrap core JavaScript
    ================================================== -->


    <!-- Latest compiled and minified JavaScript -->
    <script src="../components/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>


    <!-- main JS -->
    <script src="../components/tweenmax/TweenMax.min.js"></script>
    <script src="../docs/scripts/jquery.mb.YTPlayer.js"></script>
    <script src="../docs/scripts/elastic-progress.min.js"></script>
    <script src="../docs/scripts/classie.js"></script>
    <script src="../docs/scripts/main.js"></script>
    <script src="../docs/scripts/menu.js"></script>
    <script src="../docs/scripts/forms.js"></script>
    <script src="../docs/scripts/contact.js"></script>


    <!-- Put background video URL here  -->
    <a class="player" data-property="{videoURL:'https://www.youtube.com/watch?v=3pLNbFU430Q',containment:'body',autoPlay:true, quality:'large',  mute:true, startAt:0,opacity:1}"></a>

</body>
</html>
















