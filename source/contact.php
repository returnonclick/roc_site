<!DOCTYPE html>
<html lang="en">

<head>
    <?php include './templates/head.php'; ?>


    <style>
        #content #firstHeading {
            font-size: 14px;
        }
        #content p {
            font-size: 12px;
        }
        #contact .input__field--roc {
            border: none;
            border-bottom: 2px solid #01bded;
        }
        #contact .btn-step-finish {
            border-color: #fff;
        }
        .input--not-filled {
            border-bottom-color: red !important;
        }
    </style>

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


    <div class="container-fluid">
        <div class="row">
            <div id="map" style="height: 300px;"></div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row row-centered" style="margin: 80px 0">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <h3>We drive traffic, convert leads & solve problems!</h3>
                <div class="row">
                    <div id="form-contact" class="col-md-12 col-sm12 col-xs-12" >
                        <div class="form-group col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6 col-xs-12 conversion-phone">
                            <span class="input input--roc">
                                <input class="form-field input__field input__field--roc" type="text" id="contactName" name="contactName" data-content="Contact Name" required="required" aria-required="true">
                                <label class="input__label input__label--roc" for="contactName">
                                    <span class="input__label-content input__label-content--roc" data-content="Contact Name">Contact Name</span>
                                </label>
                            </span>
                        </div>
                        <div class="form-group col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6 col-xs-12 conversion-phone">
                            <span class="input input--roc">
                                <input class="form-field input__field input__field--roc" type="text" id="contactEmail" name="email" data-content="Email" required="required" aria-required="true">
                                <label class="input__label input__label--roc" for="email">
                                    <span class="input__label-content input__label-content--roc" data-content="Email">Email</span>
                                </label>
                            </span>
                        </div>
                        <div class="form-group col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6 col-xs-12 conversion-phone">
                            <span class="input input--roc">
                                <input class="form-field input__field input__field--roc" type="text" id="contactPhone" name="phone" data-content="Phone" required="required" aria-required="true">
                                <label class="input__label input__label--roc" for="phone">
                                    <span class="input__label-content input__label-content--roc" data-content="Phone">Phone</span>
                                </label>
                            </span>
                        </div>
                        <div class="form-group col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6 col-xs-12 conversion-phone">
                            <span class="input input--roc">
                                <textarea class="form-field input__field input__field--roc" rows="1" id="contactMessage" name="message" data-content="Message" required="required" aria-required="true"></textarea>
                                <label class="input__label input__label--roc" for="message">
                                    <span class="input__label-content input__label-content--roc" data-content="Message">Message</span>
                                </label>
                            </span>
                        </div>
                        <div class="form-group col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6 col-xs-12 conversion-phone">
                            <a class="btn btn-forms btn-white" data-form="form-contact" data-url="../../source/php/contact.php">send now</a>
                        </div>
                    </div>
                </div>
                <div class="load-message-form-contact"></div>
            </div>
        </div>
    </div>

    <!--
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
    -->

<!-- MESSAGES -->
<?php include './templates/messages.php'; ?>

<!-- REQUEST CALL -->
<?php include './templates/request-call.php'; ?>


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
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDz2SWrdJdxP9lkQcouEPZPY4queU0qQ08&callback=initMap" async defer></script>


    <!-- Put background video URL here  -->
<script>
    var map;
    function initMap() {
        // Create the map with no initial style specified.
        // It therefore has default styling.

        var returnonclick = {lat: -33.8748068, lng: 151.2216973};

        map = new google.maps.Map(document.getElementById('map'), {
            center: returnonclick,
            zoom: 14,
            scrollwheel: false,
            mapTypeControl: false
        });

        var contentString = '<div id="content">'+

            '<h1 id="firstHeading" class="firstHeading">Return On Click</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Return On Click</b>, having a website you like is great.' +
            'Having one that actually works is better. '+
            '<p>Find out more, click: <a href="http://www.returnonclick.com.au">'+
            'www.returnonclick.com.au</a> '+
            '</p>'+
            '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: returnonclick,
            map: map,
            title: 'Return On Click (Conversion Agency)'
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        // Add a style-selector control to the map.
        var styleControl = document.getElementById('style-selector-control');
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

        // Set the map's style to the initial value of the selector.
        var styleSelector = document.getElementById('style-selector');
        map.setOptions({styles: styles['silver']});

    }

    var styles = {
        default: null,
        silver: [
            {
                elementType: 'geometry',
                stylers: [{color: '#f5f5f5'}]
            },
            {
                elementType: 'labels.icon',
                stylers: [{visibility: 'off'}]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{color: '#616161'}]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{color: '#f5f5f5'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#bdbdbd'}]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#eeeeee'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#757575'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#e5e5e5'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9e9e9e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [{color: '#757575'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#dadada'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#616161'}]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9e9e9e'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#e5e5e5'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#eeeeee'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#c9c9c9'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9e9e9e'}]
            }
        ],

        night: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ],

        hiding: [
            {
                featureType: 'poi.business',
                stylers: [{visibility: 'off'}]
            },
            {
                featureType: 'transit',
                elementType: 'labels.icon',
                stylers: [{visibility: 'off'}]
            }
        ]
    };


</script>

</body>
</html>
















