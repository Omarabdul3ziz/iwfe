$(document).ready(function () {
    $(".slider-button").on('click',function () {
        $(".slider, .slider-overlay").toggleClass('active')
        $(".container").toggleClass('space')
        $(".openbtn").addClass('button-space')
    });
    $('.close').on('click', function(){
        $(".slider, .slider-overlay").removeClass('active')
        $(".container").removeClass('space')
        $(".openbtn").removeClass('button-space')

    });

    AOS.init({
        offset: 120,
		duration: 800,
		once: true
    });
})