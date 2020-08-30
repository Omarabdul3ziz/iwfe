$(document).ready(function () {
    $('.counter').counterUp({
		delay: 10,
		time: 1000
	});

    AOS.init({
        offset: 120,
		duration: 800,
		once: true
    });

});


