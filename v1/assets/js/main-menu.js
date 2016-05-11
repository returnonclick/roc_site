(function($){
  Drupal.behaviors.customMenu = {
    attach: function (context, settings) {




      var eventType = 'click';
      //if( Modernizr.touch ){ eventType = 'touchend'; }


    	var mainMenu = (function() {


        var $siteWrapper   = $('#site-wrapper'),
            $menuWrapper   = $('#main-menu'),
            $menu          = $menuWrapper.find(' > ul'),
            $listItems     = $menu.find(' > li'),
            $menuItems     = $listItems.find('.first-level-link'),
            $body          = $('body'),
            $menuOpener    = $('#opener-mobile-menu'),
            $searchWrapper = $('#header-search-wrapper'),
            $searchOpener  = $searchWrapper.find('#opener-search'),
            $searchForm    = $searchWrapper.find('#search-block-form'),
            current        = -1;

        $siteWrapper.append('<div class="overlay-touch"></div>');
        var $overlay = $siteWrapper.find('.overlay-touch');
            
        $menuItems.next('ul').wrap('<div class="sub-menu"></div>');

        function init() {
          $menuItems.on( eventType, open );
          $listItems.on( eventType, function( event ) { event.stopPropagation(); });
          $menuOpener.on( eventType, toggleMobileMenu );
          $searchOpener.on( eventType, toggleSearch );
          $overlay.on( eventType, closeMobileMenu );
          reset();
        }

        function open( event ) {

          var $item = $( event.currentTarget ).parent( 'li' ),
                idx = $item.index();
          
          if( $(window).width() > 767 ) {
            if( current !== -1 ) {
              $listItems.eq( current ).removeClass( 'open' );
            }
            if( current === idx ) {
              $item.removeClass( 'open' );
              $menu.removeClass('active');
              current = -1;
            } else {
              $item.addClass('open');
              $menu.addClass('active');
              current = idx;
              $body.off( eventType ).on( eventType, close );
            }
            return false;

          } else {
            $item.toggleClass('open');
            return false;
          }
        }

        function close( event ) {
          $listItems.eq( current ).removeClass( 'open' );
          current = -1;
        }

        function toggleMobileMenu() {
          $siteWrapper.toggleClass('mobile-menu-open');
          return false;
        }

        function closeMobileMenu() {
          $siteWrapper.removeClass('mobile-menu-open');
          return false;
        }

        function toggleSearch() {
          $(this).toggleClass('active');
          $searchForm.toggleClass('open');

          if( $searchForm.hasClass('open') ){
            setTimeout(function(){
              $searchForm.find('input[type=text]').focus();
            }, 20);
          } else {
            $searchOpener.focus();
          }
        }

        function closeSearch() {
          $(this).removeClass('active').focus();
          $searchForm.removeClass('open');
        }

        function reset() {
          $(window).on('debouncedresize', function(){
            if( $(window).width() > 767 ){
              $menuWrapper.removeClass('active');
              $menu.attr({ 'style' : '' });
            }
          }).trigger('debouncedresize');
        }
          
        return { init : init };


      })();
     

      $(function() {
        mainMenu.init();
      });

      


      // STICKY NAV
      //----------------------------
      $(function(){
        var $body         = $('body'),
            $mainNav      = $('#main-menu'),
            $stickyNavTop = $('#main-menu').offset().top;
        
        function stickyNav(){
          var scrollTop = $(window).scrollTop();
          if( scrollTop > $stickyNavTop ) { 
            $body.addClass('sticky-menu');
          } else {
            $body.removeClass('sticky-menu'); 
          }
        }

        $(window).on( 'scroll', stickyNav );
      });




    }
  };
})(jQuery);