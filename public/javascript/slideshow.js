$(document).ready(function(){
    const thumbID = '#thumb';
    var slideIndex = 0;
    var timeoutID;
    showSlides(slideIndex);

    $('.prev').click(function(){
        clearTimeout(timeoutID);
        showSlides(slideIndex - 1);
    });

    $('.next').click(function() {
        clearTimeout(timeoutID);
        showSlides(slideIndex + 1);
    });

    $('.thumbnail').click(function() {
        clearTimeout(timeoutID);
        let clicked = this.id;     
        $('.thumbnail').each(function(index) {
            if (clicked == this.id && index != slideIndex) {
                showSlides(index)
            }
        });
    });

    function nextSlideIndex(n) {
        if (n < 0) n = $('.slide').length - 1;
        if (n > $('.slide').length - 1) n = 0;
        return n;
    }

    function showSlides(n) {
        slideIndex = nextSlideIndex(n);
        $('.slide').each(function(index) {
            $(this).hide();
            $(`${thumbID}${index}`).removeClass('selected');
            if (index == slideIndex) {
                $(this).fadeIn();
                $(`${thumbID}${index}`).addClass('selected');
            }
        });
        showCaption(slideIndex);
        timeoutID = setTimeout(showSlides, 7000, slideIndex + 1);
    }

    function showCaption(n) {
        $('.caption-header').each(function(index) {
            $(this).hide();
            if (index == n) {
                $(this).fadeIn();
            }
        });
    }
});