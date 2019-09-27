$(function () {
    // 当鼠标移入第一个带箭头的图片时
    $('.content .box-1 img, .xl').mouseover(function () {
        $(this).siblings('.box').stop().animate({
            width: 679
        })
    });
    // 当鼠标移入第一个带箭头的图片时
    $('.content .box-1 img,.xl').mouseout(function () {
        $(this).siblings('.box').stop().animate({
            width: 220
        });
    });

// 当鼠标移入第二个带箭头的图片时
    $('.content .box-2 img,.xj').mouseover(function () {
        $(this).siblings('.box').stop().animate({
            width: 453
        })
    });
    // 当鼠标移入第二个带箭头的图片时
    $('.content .box-2 img,.xj').mouseout(function () {
        $(this).siblings('.box').stop().animate({
            width: 220
        });
    });

// 当鼠标移入第三个带箭头的图片时
    $('.content .box-3 img,.xc').mouseover(function () {
        $(this).siblings('.box').stop().animate({
            width: 453
        })
    });
     // 当鼠标移入第三个带箭头的图片时
    $('.content .box-3 img,.xc').mouseout(function () {
        $(this).siblings('.box').stop().animate({
            width: 220
        });
    });
// 当鼠标移入第四个带箭头的图片时
    $('.content .box-4 img,.se').mouseover(function () {
        $(this).siblings('.box').stop().animate({
            width: 679
        })
    });
     // 当鼠标移入第四个带箭头的图片时
    $('.content .box-4 img,.se').mouseout(function () {
        $(this).siblings('.box').stop().animate({
            width: 220
        });
    });

// 当鼠标移入第五个带箭头的图片时

    $('.content .box-5 img,.xx').mouseover(function () {
        $(this).siblings('.box').stop().animate({
            width: 679
        })
    });
     // 当鼠标移入第五个带箭头的图片时
    $('.content .box-5 img,.xx').mouseout(function () {
        $(this).siblings('.box').stop().animate({
            width: 220
        });
    });


// 当鼠标移入第六个带箭头的图片时
    $('.content .box-6 img,.dl').mouseover(function () {
        $(this).siblings('.box').stop().animate({
            width: 453
        })
    });
     // 当鼠标移入第六个带箭头的图片时
    $('.content .box-6 img,.dl').mouseout(function () {
        $(this).siblings('.box').stop().animate({
            width: 220
        });
    });

})