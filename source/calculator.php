<!DOCTYPE html>
<html lang="en">
<head>
    <?php include './templates/head.php'; ?>
</head>

<body>

<!-- HEADER -->
<header class="container header-main-page">
    <?php include './templates/header.php'; ?>
</header>

<!-- MENU -->
<nav class="cd-primary-nav">
    <?php include './templates/menu.php'; ?>
</nav>

<section class="container-fluid row-centered blue-bg arrow-section">
    <!-- <a id="arrow-scroll-down" href="#sec-speak-with-us" class="glyphicon glyphicon glyphicon-menu-down arrow-scroll-down" aria-hidden="true"></a> -->
</section>

<section id="speak-with-us" class="container-fluid white-bg">
    <div class="row">
        <div class="container">
            <div id="load-content" class="row">
            </div>
        </div>
    </div>
</section>

<section class="container-fluid black-bg">
    <div class="row">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-sm-10 col-xs-12">
                    <div id="timeline">
                        <ul class="timeline">
                            <li class="li">
                                <div class="status">
                                    <h4> Step 1 </h4>
                                </div>
                            </li>
                            <li class="li">
                                <div class="status">
                                    <h4> Step 2 </h4>
                                </div>
                            </li>
                            <li class="li">
                                <div class="status">
                                    <h4> Step 3 </h4>
                                </div>
                            </li>
                            <li class="li">
                                <div class="status">
                                    <h4> Step 4 </h4>
                                </div>
                            </li>
                            <li class="li">
                                <div class="status">
                                    <h4> Step 5 </h4>
                                </div>
                            </li>
                            <li class="li">
                                <div class="status">
                                    <h4> Finish </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="img-tiger"></div>
                </div>
            </div>
        </div>
    </div>
</section>




<section class="container-fluid row-centered blue-bg arrow-section">
    <!--- <a id="arrow-scroll-up" href="#" class="glyphicon glyphicon glyphicon-menu-up arrow-scroll-up" aria-hidden="true"></a> -->
</section>

<!-- FOOTER -->
<footer class="container-fluid footer-container white-bg">
    <?php include './templates/footer.php'; ?>
</footer>


<div id="content-step-0" class="not-display">
    <div class="col-md-10 col-sm-12 col-xs-12">
        <h1>Let’s Calculate Your Conversion Rate</h1>
        <p>We know you want to get the ball rolling, but before we chat, let’s see how many conversions you’re receiving at the moment. Don’t worry if it’s pretty low, we’re here to fix that.</p>
        <a class="btn btn-white btn-step" data-steps="1" data-type="content">Next</a>
    </div>
</div>

<div id="content-step-1" class="not-display">
    <div class="col-md-8 col-sm-12 col-xs-12">
        <h1>What’s Your Vibe?</h1>
        <p>Do you sell soap or do you wash puppies?</p>
        <p>Is your business all about selling a particular product or are you all about a particular service?</p>
        <a class="btn btn-white btn-step" data-steps="2" data-type="product-content" data-content="Product">Product</a>
        <a class="btn btn-white btn-step" data-steps="2" data-type="product-content" data-content="Service">Service</a>
    </div>
</div>

<div id="product-content-step-2" class="not-display">
    <div class="col-md-8 col-sm-12 col-xs-12">
        <h1>Where Are Your Customers Coming From?</h1>
        <p>If you’re already attempting other means of conversion, let us know what advertising techniques you’re implementing. If you're not - that's okay too!</p>
        <a class="btn btn-gray btn-step-check" data-steps="3" data-type="content" data-name="media" data-content="Google">Google</a>
        <a class="btn btn-gray btn-step-check" data-steps="3" data-type="content" data-name="media" data-content="Social Media">Social Media</a>
        <a class="btn btn-gray btn-step-check" data-steps="3" data-type="content" data-name="media" data-content="Directories">Directories</a>
        <a class="btn btn-gray btn-step-check" data-steps="3" data-type="content" data-name="media" data-content="Newspaper">Newspaper</a>
        <a class="btn btn-gray btn-step-check" data-steps="3" data-type="content" data-name="media" data-content="Radio">Radio</a>
        <a class="btn btn-gray btn-step-check" data-steps="3" data-type="content" data-name="media" data-content="TV">TV</a>
        <a class="btn btn-gray btn-step-check" data-steps="3" data-type="content" data-name="media" data-content="Smoke Signals">Smoke Signals</a>
        <a class="btn btn-gray btn-step-check" data-steps="3" data-type="content" data-name="media" data-content="None">None</a>
        <a class="btn btn-white btn-step" data-steps="3" data-type="content">Next</a>
    </div>
</div>

<div id="service-content-step-2" class="not-display">
    <div class="col-md-8 col-sm-12 col-xs-12">
        <h1>Lorem Ipsum Lorem Ipsum</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a class="btn btn-white btn-step" data-steps="3" data-type="content">Next</a>
    </div>
</div>


<div id="content-step-3" class="not-display">
    <div id="leads-step-1" class="col-md-10 col-sm-12 col-xs-12">
        <h1>How many leads do you receive per month?</h1>
        <div class="clearfix" style="padding-bottom: 60px"></div>
        <a class="btn-step hovicon effect-8" data-steps="4" data-type="content" data-id="1" data-content="< 10">< 10</a>
        <a class="btn-step hovicon effect-8" data-steps="4" data-type="content" data-id="2" data-content="20 - 30">20 - 30</a>
        <a class="btn-step hovicon effect-8" data-steps="4" data-type="content" data-id="3" data-content="30 - 50">30 - 50</a>
        <a class="btn-step hovicon effect-8" data-steps="4" data-type="content" data-id="4" data-content="50 - 100">50 - 100</a>
        <a class="btn-step hovicon effect-8" data-steps="4" data-type="content" data-id="5" data-content="100 +">100 +</a>
    </div>
</div>


<div id="content-step-4" class="not-display">
    <div id="leads-step-2" class="col-md-8 col-sm-12 col-xs-12">
        <h1>How many leads out of ten turn into a sale?</h1>
        <div class="clearfix" style="padding-bottom: 40px"></div>
        <a class="btn-person" data-id="1" data-steps="5" data-type="content" data-content="1"><img class="img-person blur-grayscale" src="../docs/images/lead.png"></a>
        <a class="btn-person" data-id="2" data-steps="5" data-type="content" data-content="2"><img class="img-person blur-grayscale" src="../docs/images/lead.png"></a>
        <a class="btn-person" data-id="3" data-steps="5" data-type="content" data-content="3"><img class="img-person blur-grayscale" src="../docs/images/lead.png"></a>
        <a class="btn-person" data-id="4" data-steps="5" data-type="content" data-content="4"><img class="img-person blur-grayscale" src="../docs/images/lead.png"></a>
        <a class="btn-person" data-id="5" data-steps="5" data-type="content" data-content="5"><img class="img-person blur-grayscale" src="../docs/images/lead.png"></a>
        <a class="btn-person" data-id="6" data-steps="5" data-type="content" data-content="6"><img class="img-person blur-grayscale" src="../docs/images/lead.png"></a>
        <a class="btn-person" data-id="7" data-steps="5" data-type="content" data-content="7"><img class="img-person blur-grayscale" src="../docs/images/lead.png"></a>
        <a class="btn-person" data-id="8" data-steps="5" data-type="content" data-content="8"><img class="img-person blur-grayscale" src="../docs/images/lead.png"></a>
        <a class="btn-person" data-id="9" data-steps="5" data-type="content" data-content="9"><img class="img-person blur-grayscale" src="../docs/images/lead.png"></a>
        <a class="btn-person" data-id="10" data-steps="5" data-type="content" data-content="10"><img class="img-person blur-grayscale" src="../docs/images/lead.png"></a>

        <div class="clearfix" style="padding-bottom: 70px"></div>
        <h1 class="row-centered convert-equation">0 / 10</h1>
        <div class="clearfix" style="padding-bottom: 40px"></div>
    </div>
</div>

<div id="content-step-5" class="not-display">
    <div class="col-md-8 col-sm-12 col-xs-12">
        <h1>Can We Grab Your Deets?</h1>
        <p>Give us your number, and we’ll be the first call of many.</p>
        <div class="row">
            <div class="form-group col-md-6 col-sm-6 col-xs-12">
                <span class="input input--roc">
					<input class="input__field input__field--roc" type="text" id="businessName" name="businessName" data-content="Business Name" required="required" aria-required="true">
					<label class="input__label input__label--roc" for="businessName">
                        <span class="input__label-content input__label-content--roc" data-content="Business Name">Business Name</span>
                    </label>
				</span>
            </div>
            <div class="form-group col-md-6 col-sm-6 col-xs-12">
                <span class="input input--roc">
					<input class="input__field input__field--roc" type="text" id="contactName" name="contactName" data-content="Contact Name" required="required" aria-required="true">
					<label class="input__label input__label--roc" for="contactName">
                        <span class="input__label-content input__label-content--roc" data-content="Contact Name">Contact Name</span>
                    </label>
				</span>
            </div>
            <div class="form-group col-md-6 col-sm-6 col-xs-12 conversion-email">
                <span class="input input--roc">
					<input class="input__field input__field--roc" type="text" id="email" name="email" data-content="Email" required="required" aria-required="true">
					<label class="input__label input__label--roc" for="email">
                        <span class="input__label-content input__label-content--roc" data-content="Email">Email</span>
                    </label>
				</span>
            </div>
            <div class="form-group col-md-6 col-sm-6 col-xs-12 conversion-phone">
                <span class="input input--roc">
					<input class="input__field input__field--roc" type="text" id="phone" name="phone" data-content="Phone" required="required" aria-required="true">
					<label class="input__label input__label--roc" for="phone">
                        <span class="input__label-content input__label-content--roc" data-content="Phone">Phone</span>
                    </label>
				</span>
            </div>
        </div>
            <a class="btn btn-white btn-step-finish" data-steps="6">Finish</a>
            <div class="load-message-form-form-group"></div>
    </div>
</div>

<div id="content-step-sent" class="not-display">
    <div class="col-md-8 col-sm-12 col-xs-12">
        <h1>Sit Back and Relax</h1>
        <p>A carrier pigeon has delivered your enquiry safely into our inbox. Hold tight -  we’ll be in touch soon!</p>
    </div>
</div>
<div id="content-step-error" class="not-display">
    <div class="col-md-8 col-sm-12 col-xs-12">
        <h1>Oops!</h1>
        <p>Somethings gone wrong! Give it another go.</p>
    </div>
</div>

<!-- REQUEST CALL -->
<?php include './templates/request-call.php'; ?>

<!-- MESSAGES -->
<?php include './templates/messages.php'; ?>

<!-- Latest compiled and minified JavaScript -->
<script src="../components/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

<!-- main JS -->
<script src="../docs/scripts/mo.min.js"></script>
<script src="../docs/scripts/icons.js"></script>
<script src="../components/tweenmax/TweenMax.min.js"></script>
<script src="../docs/scripts/classie.js"></script>
<script src="../docs/scripts/main.js"></script>
<script src="../docs/scripts/menu.js"></script>
<script src="../docs/scripts/conversion-calculator.js"></script>
<script src="../docs/scripts/forms.js"></script>


</body>
</html>
















