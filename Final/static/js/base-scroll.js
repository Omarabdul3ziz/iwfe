$( window ).scroll( function () {
    if ($(".feedback-form, .newsletter-form").hasClass("appear")){
        return
    }
    if ( $(document).scrollTop() > 80 ) {
        $('.navbar').addClass('scroll-down');
        $('.navbar').addClass('animated fadeIn');
        $('.white-logo').removeClass('navbar-brand');
        $('.blue-logo').addClass('navbar-brand');
        $('.nav-btn').addClass('scroll-btn');
    }
    else{
        if(!$(".dropdown-menu").hasClass("show")){
            $('.navbar').removeClass('scroll-down');
            $('.white-logo').addClass('navbar-brand');
            $('.blue-logo').removeClass('navbar-brand');
            $('.nav-btn').removeClass('scroll-btn');
        }

    }
})
$(window).scroll();