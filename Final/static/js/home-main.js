$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:'<span class="carousel_arrow next_arrow fa-2x"><i class="fas fa-angle-right" style="color:style=#26272b;"></i></span>',
        prevArrow:'<span class="carousel_arrow prev_arrow fa-2x"><i class="fas fa-angle-left" style="color:#26272b;"></i></span>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            },
            ]
    });
    $('.feedback-btn').click(function(){
        if (!$(".feedback-form").hasClass("appear")){
            $('#body-content').css({"position":"fixed", "top": "-" + $(document).scrollTop() + "px"});
            $(document).scrollTop(0);
        }
        $('.feedback-form').toggleClass("appear");
        $('.feedback-btn').toggleClass("disappear");
        $('.feedback-overlay').toggleClass("appear");
        $('.vertical-btn').addClass("disappear");
    })
    
    $('.feedback-form-close').click(function(){
        $('.feedback-btn').toggleClass("disappear");
        $('.feedback-form').toggleClass("appear");
        $('.feedback-overlay').toggleClass("appear");
        $('.feedback-btn').removeClass("disappear");
        $('#body-content').css({"position":"inherit"});
        $('html').css({"scroll-behavior":"inherit"});
        $(window).scrollTop(-1 * parseInt($('#body-content').css("top").replace("px", "")), {duration:0});
        $('html').css({"scroll-behavior":"smooth"});
    })
    $('.feedback-overlay').click(function(){
        $('.feedback-form-close').click();
    })
   
    AOS.init({
        offset: 120,
		duration: 800,
        once: true 
       });
});