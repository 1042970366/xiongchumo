$(function() {
    var Toprmenu = $('.rmenu').offset().top;
    // console.log(Toprmenu);
    $(window).scroll(function() {
        if ($(window).scrollTop() > Toprmenu) {
            //$('.rmenu').css('top', $(window).scrollTop() - Toprmenu);
            // $('.rmenu').stop();
            $('.rmenu').stop().animate({
                top: $(window).scrollTop() - Toprmenu
            }, 1000);
        }
    })
});