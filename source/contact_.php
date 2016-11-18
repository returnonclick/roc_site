<!DOCTYPE html>
<html lang="en">

<head>
    <?php include './templates/head.php'; ?>
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
















