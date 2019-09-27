$(function() {
    var count = 0;

    $(".arrow-down").click(function() {
        count++;
        // console.log(count);


        if (count == $(".l-img li").length) {
            count = 0;
        }
        // console.log(count);
        //让count渐渐的显示，其他兄弟渐渐的隐藏
        $(".l-img li").eq(count).fadeIn().siblings("li").fadeOut();
        $('.r-img li').eq(count).addClass('cur').siblings().removeClass('cur');
        $('.r-img img').eq(count).addClass('one').parents('li').siblings().find('img').removeClass('one');
    });

    $(".arrow-up").click(function() {
        count--;

        if (count == -1) {
            count = $(".l-img li").length - 1;
        }
        // console.log(count);
        //让count渐渐的显示，其他兄弟渐渐的隐藏
        $(".l-img li").eq(count).fadeIn().siblings("li").fadeOut();
        $('.r-img li').eq(count).addClass('cur').siblings().removeClass('cur');
        $('.r-img li img').eq(count).addClass('one').parents('li').siblings().find('img').removeClass('one');
    })

    var timer = setInterval(function() {
        $(".arrow-up").click();
        $('.r-img li').eq(count).addClass('cur').siblings().removeClass('cur');
        $('.r-img li img').eq(count).addClass('one').parents('li').siblings().find('img').removeClass('one');

    }, 3000)

    $('.r-img li img').click(function() {
        $(this).addClass('one').parents('li').siblings().find('img').removeClass('one');
        $(this).parents('li').addClass('cur').siblings().removeClass('cur');
        var index = $(this).parents('li').index();
        $('.l-img li').eq(index).fadeIn().siblings().fadeOut();


    });







})