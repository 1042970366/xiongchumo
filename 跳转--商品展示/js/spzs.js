$(function () {
    gunDong();
    function gunDong() {
        var n = $('.com_top').offset().top;
 
        var m = $(document).scrollTop();
       
        if (m >= n) {
            $('.return').fadeIn()
           
        } else {
            $('.return').fadeOut()
        }
    }
    $(window).scroll(function () {
        gunDong();
    })

})
