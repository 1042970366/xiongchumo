$(function () {
    var iid;
    var i;
    $(".park_dian").mouseover(function () {
        iid = $(this).attr('id');
        if ($('.p_' + iid).css('opacity') == 0) {
            $(this).addClass('park_dian_cur').siblings().removeClass('park_dian_cur');
            $('.park_map_line').css('opacity', 0);
            $('.park_map_line1').css('left', 1168);
            $('.park_map_line2').css('top', 700);
            $('.park_map_line3').css('left', 600);
            $('.park_map_line4').css('top', 200);
            $('.park_in').hide().css('opacity', 0);
            $('.park_map_line1').animate({
                left: 768,
                opacity: 1,
            }, 500);
            $('.park_map_line3').animate({
                left: 1090,
                opacity: 1,
            }, 500);
            $('.park_map_line2').animate({
                top: 400,
                opacity: 1,
            }, 500);
            $('.park_map_line4').animate({
                top: 520,
                opacity: 1,
            }, 500);
            $('.p_' + iid).show().animate({
                opacity: 1,
            }, 800);
        }
    });

    //鼠标滚动出现
    var windowHeight = $(window).height();
    var a2Top = $('.company_1').offset().top;
    var layout_dian_length = $('.park_dian ').length;
    var scroll_flag = 0;
    $(window).scroll(function () {
        if ($(window).scrollTop() > a2Top - windowHeight / 2 - 200 && scroll_flag == 0) {
            scroll_flag = 1;
            for (var n = 1; n <= layout_dian_length + 1; n++) {
                var nn1 = 300 + 50 * n;
                var nn2 = 500 + 20 * n;
                var nn3 = 600 + 50 * n;
                $("#pa_" + n).animate({
                    opacity: 1,
                }, nn1);
                $("#pa_" + n + " div").animate({
                    bottom: 30,
                }, nn2);
                $("#pa_" + n + " div").animate({
                    bottom: 0
                }, 100);
                $("#pa_" + n + " b").animate({
                    bottom: 45
                });

            }
        }
    })
})


