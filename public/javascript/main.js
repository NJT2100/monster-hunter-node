$(document).ready(function() { 

    $(window).scroll(function() {
        if ($(document).scrollTop() > 20) {
            $('#goToTop').fadeIn();
        } else {
            $('#goToTop').fadeOut();
        }
    });

    $('#goToTop').click(function() {
        $(document).scrollTop(0);
    });   

});