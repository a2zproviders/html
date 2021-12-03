(function ($) {
    
	
	$(window).on( 'load', function() { // makes sure the whole site is loaded 
        $( '#box' ).fadeOut(); // will first fade out the loading animation 
        $( '#preloader' ).delay( 350 ).fadeOut( 'slow' ); // will fade out the white DIV that covers the website.
        $( 'body' ).delay( 350 ).css( { 'overflow': 'visible' } );
    })

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
         //>=, not <=
        if(window.matchMedia("(max-width: 768px)").matches){

        } else {
            if (scroll >= 100) {
                //clearHeader, not clearheader - caps H
                
                $("#header").addClass("scroll-header");
            } else {
                $("#header").removeClass("scroll-header");
            }
        }
        
    });

    $('#header_menu').click(function () {
        
        $('#header_menu').toggleClass('menu-active');
        $('.nav').toggleClass('nav-active');
        $('#header_subnav').removeClass('active-subnav');
    })

    $('#header_subnav').click(function () {
        
        $('#header_subnav').toggleClass('active-subnav');
    })
    
    


})(window.jQuery);