$(function() {
    showDiv();

    function showDiv() {
        var Topval = $(document).scrollTop();
        if (Topval >= $('.title').offset().top) {
            $('.return_top_index').fadeIn();
        } else {
            $('.return_top_index').fadeOut();
        }
    }

    $(window).scroll(function() {
        showDiv();
    });

    $('.return_top_index').click(function() {
        var topZhi = $('.jq22-container').offset().top;
        $('body,html').stop().animate({
            scrollTop: topZhi
        }, 1000);
    })





})