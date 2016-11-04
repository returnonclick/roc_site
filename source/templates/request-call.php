<!-- REQUEST A CALL -->
<link rel="stylesheet" href="../docs/styles/remodal.css">
<link rel="stylesheet" href="../docs/styles/remodal-default-theme.css">
<script src="../docs/scripts/remodal.min.js"></script>

<!-- SECTION CONTACT FORM -->

<div class="remodal remodal-is-initialized remodal-is-closed" data-remodal-id="modal" aria-labelledby="modalTitle" aria-describedby="modalDesc" tabindex="-1">
    <button data-remodal-action="close" class="remodal-close" aria-label="Close"></button>
    <br>
    <h3>Request a call</h3>
    <br>
    <div class="container-fluid section-request-form">
        <div id="form-request-call" class="col-md-12 col-sm12 col-xs-12" >
            <div class="row">
                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                    <input type="text" class="form-control form-field blue-border" id="requestName" name="contactName" placeholder="Name" required/>
                </div>

                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                    <input type="text" class="form-control form-field blue-border" id="requestPhone" name="phone" placeholder="Phone Number" required/>
                </div>

                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                    <textarea class="form-control form-field blue-border" rows="5" id="requestComment" name="comment" placeholder="Your Message" required></textarea>
                </div>
                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                    <a href="#" class="btn-forms btn-blue" data-form="form-request-call" data-url="../../source/php/requestCall.php">Request a call</a>
                </div>
            </div>
        </div>
    </div>
    <div class="load-message-form-request-call"></div>
</div>