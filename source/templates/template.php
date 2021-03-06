<template id="header">
    <div class="row">
        <div class="col-md-4 col-sm-4 col-xs-6">
            <a class="pull-left" href="./index.html">
                <div class="logo-black col-md-6 col-sm-6 col-xs-6"></div>
            </a>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-5 request-call-phone">
            <a class="phone pull-right" href="tel:1300021087"><span class="glyphicon glyphicon-earphone"></span> 1300 021 087</a>
            <a href="#modal" class="btn btn-call btn-white pull-right">Request a Call</a>
        </div>
        <div class="col-md-1 col-sm-8 col-xs-6">
            <a class="cd-primary-nav-trigger pull-right" href="#0">
                <span class="cd-menu-icon cd-menu-icon-black"></span>
            </a>
        </div>
    </div>
</template>

<template id="header-white">
    <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6">
            <a class="pull-left" href="./index.html">
                <div class="logo-white col-md-6 col-sm-6 col-xs-6"></div>
            </a>
        </div>

        <div class="col-md-5 col-sm-6 col-xs-6">
            <a class="cd-primary-nav-trigger pull-right" href="#0">
                <span class="cd-menu-icon cd-menu-icon-white"></span>
            </a>
        </div>
    </div>
</template>

<template id="menu">

    <ul class="visible">
        <li class="cd-label"><a class="link link--roc" href="./index.html" data-letters="about">about <span>return on cLick</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="#" data-letters="services" data-submenu="true">services <span>#conversionagency</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./calculator.html" data-letters="conversion-rate">conversion rate <span>what's mine?</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./contact.html" data-letters="contact">contact <span>Talk to us</span></a></li>
    </ul>

    <ul class="invisible" data-parent="services">
        <li class="cd-label"><a class="link link--roc" href="#" data-letters="design" data-submenu="true">design <span>complete branding</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./webdevelopment.html" data-letters="web-development">web development <span>built differently from the ground up</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="#" data-letters="lead-source" data-submenu="true">lead strategy <span>strategies other than smoke signals</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="#" data-letters="custom-solution" data-submenu="true">custom solutions <span>if we build it, they will come</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="#" data-letters="business-analysis" data-submenu="true">conversion path marketing <span>architecturally formulated to convert visitors</span></a></li>
    </ul>

    <ul class="invisible" data-parent="design">
        <li class="cd-label"><a class="link link--roc" href="./graphicdesign.html" data-letters="graphic-design">graphic design <span>brand conceptualisation</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./wireframing.html" data-letters="wire-frame">wire framing <span>paper before code</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./webdesign.html" data-letters="ui-/-ux-&-web-design">ui / ux & web design <span>user interface and experience</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./copywriting.html" data-letters="copyright">copywriting <span>your message is critical</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./video.html" data-letters="video">video <span>why not?</span></a></li>
    </ul>

    <ul class="invisible" data-parent="lead-source">
        <li class="cd-label"><a class="link link--roc" href="./seo.html" data-letters="seo">seo <span>optimisation</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./sem.html" data-letters="sem">sem <span>marketing</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./socialmedia.html" data-letters="social-media">social media <span>influence</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./edm.html" data-letters="edm-s">edm's <span>funnel process</span></a></li>
    </ul>

    <ul class="invisible" data-parent="custom-solution">
        <li class="cd-label"><a class="link link--roc" href="./crm.html" data-letters="crm">crm <span>customer engagement</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./cms.html" data-letters="cms">cms <span>content management</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./app.html" data-letters="app">apps <span>android and ios</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./mobilecustomisation.html" data-letters="mobile-customisation">mobile customisation <span>responsive design</span></a></li>
    </ul>

    <ul class="invisible" data-parent="business-analysis">
        <li class="cd-label"><a class="link link--roc" href="./tracking.html" data-letters="tracking">tracking <span>data capture</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./leadmagnets.html" data-letters="lead-magnets">lead magnets <span>low threshold</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./calltracking.html" data-letters="call-tracking">call tracking <span>make better decisions</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./tripwires.html" data-letters="trip-wires">trip wires <span>real incentives</span></a></li>
        <li class="cd-label"><a class="link link--roc" href="./splittesting.html" data-letters="split-testing">split testing <span>A/B testing</span></a></li>
    </ul>

    <a class="link link--roc back invisible" href="#" data-parent="back">BACK</a></li>

</template>

<template id="services-report">
    <div class="row">
        <div class="container">
            <div class="row row-centered">
                <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
                    <h1 class="thick" style="text-transform: uppercase">13 Actionable Strategies <br>to Double My Leads</h1>
                </div>
                <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                    <a href="#" class="btn btn-services btn-white">Get My Free Report</a>
                </div>
            </div>
        </div>
    </div>
</template>

<template id="free-offer">
    <div class="row">
        <div class="container">
            <div class="row row-centered">
                <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                    <h1 class="thick">Turn Your Website Into a Lead-Generating Machine</h1>
                </div>
                <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
                    <a href="./contact.html" class="btn btn-services btn-blue">TALK TO A SPECIALIST</a>
                </div>
            </div>
        </div>
    </div>
</template>

<template id="messages">
    <!--  MESSAGES  -->
    <div id="success-message" class="not-display">
        <h4>Sent successfully</h4>
    </div>
    <div id="error-message" class="not-display">
        <h4>Send unsuccessful</h4>
    </div>
    <div id="loading-message" class="not-display">
        <h4><img class="sending" src="../docs/images/sending.gif"></h4>
    </div>
</template>

<template id="request-call">
    <!-- REQUEST A CALL -->
    <link rel="stylesheet" href="../docs/styles/remodal.css">
    <link rel="stylesheet" href="../docs/styles/remodal-default-theme.css">
    <script src="../docs/scripts/remodal.min.js"></script>

    <!-- SECTION CONTACT FORM -->

    <div class="remodal remodal-is-initialized remodal-is-closed" data-remodal-id="modal" aria-labelledby="modalTitle" aria-describedby="modalDesc" tabindex="-1">
        <button data-remodal-action="close" class="remodal-close" aria-label="Close"></button>
        <h3>Request a call</h3>
        <div class="container-fluid section-request-form">
            <div id="form-request-call" class="col-md-12 col-sm12 col-xs-12" >
                <div class="row">
                    <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <input type="text" class="form-control form-field" id="requestName" name="contactName" placeholder="Name" required/>
                    </div>

                    <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <input type="text" class="form-control form-field" id="requestPhone" name="phone" placeholder="Phone Number" required/>
                    </div>

                    <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <textarea class="form-control form-field" rows="5" id="requestComment" name="comment" placeholder="Your Message" required></textarea>
                    </div>
                    <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <a href="#" class="btn-forms btn-blue" data-form="form-request-call" data-url="../../source/php/requestCall.php">Request a call</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="load-message-form-request-call"></div>
    </div>
</template>

<template id="footer">
    <div class="container">
        <div class="row">
            <!--  Social profiles in footer -->
            <div class="col-md-2 col-sm-12 col-xs-12">
                <a title="Follow on Facebook" target="_blank" class="sm-links sm-linkedin row-centered" href="https://www.linkedin.com/company/return-on-click"><i class="fa fa-linkedin"></i></a>
                <a title="Follow on Twitter" target="_blank" class="sm-links sm-twitter row-centered" href="https://twitter.com/returnonclick"><i class="fa fa-twitter"></i></a>
                <a title="Follow on Google+" target="_blank" class="sm-links sm-google-plus row-centered" href="https://plus.google.com/+ReturnonclickAuconversionwebsite/about"><i class="fa fa-google-plus"></i></a>
            </div>

            <!-- END OF social profiles in footer -->
            <div class="col-md-10 col-sm-12 col-xs-12">
                <div class="pull-right copyright">&#169; 2016 Return On Click All rights reserved.</div>
            </div>
        </div>
    </div>
</template>