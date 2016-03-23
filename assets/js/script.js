(function($) {
  Drupal.behaviors.customScripts = {
    attach: function (context, settings) {




      var $siteWrapper = $('#site-wrapper'),
          $wysiwyg     = $('#main-content .wysiwyg'),
          $table        = $wysiwyg.find('table');




      // BROWSER DETECT
      //----------------------------
      var userAgent = navigator.userAgent.toLowerCase();
      $.browser = {
         version: (userAgent.match( /.+(?:rv|it|ra|ie|me)[\/: ]([\d.]+)/ ) || [])[1],
         safari: /webkit/.test( userAgent ) && !/chrome/.test( userAgent ),
         mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
         //chrome: /chrome/.test( userAgent ),
         //opera: /opera/.test( userAgent ),
         //msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
      };

      if ( $.browser.safari ){
        $('body').addClass('safari');
      }

      if ( $.browser.mozilla ){
        $('body').addClass('firefox');
      }




      // EVENT TYPE
      //----------------------------
      var eventType = 'click';
      //if( Modernizr.touch ){ eventType = 'touchend'; }




      // TABLE & IFRAME SHIZZLE
      //----------------------------
      $table
        .wrap('<div class="table-wrapper"></div>').end()
        .find('tr:even').addClass('even').end()
        .find('tr:odd').addClass('odd').end();

      $wysiwyg
        .find('iframe').wrap('<div class="iframe-wrapper"></div>');




      // REMOVE BORDER ON IMAGE LINKS
      //----------------------------
      $wysiwygLinkImages = $wysiwyg.find('a img');

      if( $wysiwyg.length > 0 && $wysiwygLinkImages.length > 0 ){
        $wysiwygLinkImages.parent('a').addClass('no-border');
      }




      // TRIANGLE
      //----------------------------
      var $wrapperTriangle = $('.section-block-triangle');

      if( $wrapperTriangle.length > 0 ){
        var $link = $wrapperTriangle.find('.link-triangle');
        $link.prepend('<span class="triangle"></span>');
      }

      function trianglify(){
        $link.each( function() {
          var $self            = $(this),
              containerHeight  = $self.outerHeight(),
              containerWidth   = $self.outerWidth(),
              $aTriangle       = $self.find('.triangle');
              $aTriangle.css( 'border-width', '0 0 ' + containerHeight + 'px ' + containerWidth + 'px' );
        });
      }




      // RESIZE ACTIONS
      //----------------------------
      $(function(){
        $(window).on('debouncedresize', function(){


          // --- Skrollr config
          if( $(window).width() > 768 && !Modernizr.touch && $('.ie8').length < 1 ){
            if( $('.template-adn').length > 0 ) {
              var fish = $('.template-adn .header-article .fish-desktop')[0];
              var eagleFlying = $('.template-adn .section-eagle .eagle-flying')[0];
              /*console.log(fish);*/
              var lastDirection;

              var s = skrollr.init({
                edgeStrategy: 'set',
                smoothScrolling:true,
                render: function(data) {
                  
                if(lastDirection !== data.direction) {
                    lastDirection = data.direction;
                    var otherDirection = (data.direction === 'up') ? 'down' : 'up';
                    $('html').addClass('skrollr-' + data.direction).removeClass('skrollr-' + otherDirection);
                }
                  
                }
                /*,
                keyframe: function(element, keyframe, direction) {
                    if(element !== fish) {
                      return;
                    }
                    
                    if(direction === 'up') {
                      console.log("up, 401");
                      fish.style.webkitTransform = "1";
                      fish.style.MozTransform = "1";
                      fish.style.msTransform = "1";
                      fish.style.OTransform = "1";
                      fish.style.transform = "1";
                      fish.style.msFilter = "flipH";  
                    }
                }*/
              });
            }
          }


          if( $wrapperTriangle.length > 0 ){
            trianglify();
          }


        }).trigger('debouncedresize');
      });




      // MENU LIST CATEGORY
      //----------------------------
      $(function(){

        var $menuCatWrapper = $('#menu-cat-wrapper'),
            $menuCat        = $menuCatWrapper.find('#menu-cat'),
            $activeCat      = $menuCat.find('.active'),
            $button         = $menuCatWrapper.find('#menu-cat-button'),
            $currentText    = $activeCat.text();

        function openMenuCat() {
          $menuCatWrapper.toggleClass('open');
        }

        $button
          .text($currentText)
          .wrapInner('<span></span>')
          .on( eventType, openMenuCat );

      });


      $('.scroll-top').click(function(){
    		$('html, body').animate({scrollTop : 0},800);
    		return false;
    	});

      
        
      










    }
  };

  $('#button-contactUs').click(function() {
      $(".collapse").on('show.bs.collapse', function(){
        $('.section-contact_form').css({"padding":"40px 0px 20px 0px"});
      });

      $(".collapse").on('hidden.bs.collapse', function(){
        $('.section-contact_form').css({"padding":"0"}).fadeTo("slow");

    });
  });


})(jQuery);

