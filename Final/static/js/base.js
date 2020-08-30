$(document).ready(function () {
    $('.navbar .dropdown-item').on('click', function (e) {
        var $el = $(this).children('.dropdown-toggle');
        var $parent = $el.offsetParent(".dropdown-menu");
        $(this).parent("li").toggleClass('open');

        if (!$parent.parent().hasClass('navbar-nav')) {
            if ($parent.hasClass('show')) {
                $parent.removeClass('show');
                $el.next().removeClass('show');
                $el.next().css({ "top": -999, "left": -999 });
            } else {
                $parent.parent().find('.show').removeClass('show');
                $parent.addClass('show');
                $el.next().addClass('show');
                $el.next().css({ "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 });
            }
            e.preventDefault();
            e.stopPropagation();
        }
    });

    $('.navbar .dropdown').on('hidden.bs.dropdown', function () {
        $(this).find('li.dropdown').removeClass('show open');
        $(this).find('ul.dropdown-menu').removeClass('show open');
    });

    $(".dropdown-toggle").click(function(){
        if($(".dropdown-menu").hasClass("show")){
            $(".should-be-active").removeClass("should-be-active").addClass("active");
            $(this).removeClass("active")
        }else{
            $(".nav-link").each(function(){
                if($(this).hasClass("active")){
                    $(this).addClass("should-be-active");
                }
                $(this).removeClass("active");
            });
            $(this).addClass("active")
        }
        if ( $(document).scrollTop() < 80 ) {
            $('.navbar').toggleClass("scroll-down");
            $('.navbar').toggleClass('animated fadeIn');
            $('.white-logo').toggleClass('navbar-brand');
            $('.blue-logo').toggleClass('navbar-brand');
            $('.nav-btn').toggleClass('scroll-btn');
        }
        var deg = parseInt($(".dropdown-toggle .fa-angle-down").css('textIndent').replace("px","").replace());
        $('.dropdown-toggle .fa-angle-down').animate({  textIndent: deg+180 }, {
            step: function(now,fx) {
                $(this).css('-moz-transform','rotate('+now+'deg)'); 
                $(this).css('-webkit-transform','rotate('+now+'deg)'); 
            },
            duration:'fast'
        },'linear');
    });

    $(".nav-link").click(function(){
        if(!$(this).hasClass("dropdown-toggle")){
            $(".nav-link").removeClass("active");
            $(this).addClass("active")
        }        
    });

    $(".navbar-toggler").click(function(){
        
        if($(".navbar-collapse").hasClass("show")){
            $('.fixed-top').css({"position":"fixed"});  
            $('#body-content').css({"position":"inherit"});
            $('html').css({"scroll-behavior":"inherit"});
            $(window).scrollTop(-1 * parseInt($('#body-content').css("top").replace("px", "")), {duration:0});
            $('html').css({"scroll-behavior":"smooth"});
   
        }else{
            $('#body-content').css({"position":"fixed", "top": "-" + $(document).scrollTop() + "px"});
            $('.fixed-top').css({"position":"relative"});  
            $(document).scrollTop(0);

        }
    });


    $(".nav-btn").click(function(){
        if (!$(".newsletter-form").hasClass("appear")){
            $('#body-content').css({"position":"fixed", "top": "-" + $(document).scrollTop() + "px"});
        }
        if ( $(document).scrollTop() > 80 ) {
            $('.navbar').addClass("scroll-down");
            console.log("hello")
        }
        $('.newsletter-form').toggleClass("appear");
        $('.newsletter-overlay').toggleClass("appear");
    })

    $(".newsletter-form-close").click(function(){
        $('.newsletter-form').toggleClass("appear");
        $('.newsletter-overlay').toggleClass("appear");
        $('#body-content').css({"position":"inherit"});
        $('html').css({"scroll-behavior":"inherit"});
        $(window).scrollTop(-1 * parseInt($('#body-content').css("top").replace("px", "")), {duration:0});
        $('html').css({"scroll-behavior":"smooth"});
    })
});

$('.newsletter-overlay').click(function(){
    $('.newsletter-form-close').click();
})

