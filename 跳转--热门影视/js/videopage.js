$(function () {
    //    var btn = document.querySelector('.play-btn');
    //    var slide = document.querySelector('.play-slide');

    //    btn.onclick = function(){
    //     console.log(666);
    //     slide.style.width = '0';
    //     slide.style.flex = '0';
    //    }
    var btn = $('.play-btn');
    // console.log(btn);
    var open = $('.play-btn-open');
    var follow = $('.play-btn-follow');
    var follow2 = $('.play-btn-follow-2');
    console.log(open);
    btn.click(function () {
        follow.click();
        btn.hide();
        btn.siblings('.play-btn-open').show();
    })
    open.click(function () {
        follow2.click();
        open.hide();
        open.siblings('.play-btn').show();
    })


    // btn.click(function () {
    //     btn.siblings('.play-btn-follow').animate({
    //         right:-32,
    //     },850)
    //     // btn.siblings('.play-slide').css('opacity','1').toggle();
    //     btn.siblings('.play-slide').stop().animate({
    //         width: 0,
    //         opacity:0
    //     }, 180)
    //     // btn.siblings('.play-slide').fadeToggle(1000,'linear');
    //     btn.hide();
    //     btn.siblings('.play-btn-open').show();


    // })
    follow.click(function () {
        follow2.css('right', -32);
        follow.animate({
            right: -32,
        }, 850, function () {
            follow.hide();
            follow.siblings('.play-btn-follow-2').show();
        })
        // btn.siblings('.play-slide').css('opacity','1').toggle();
        follow.siblings('.play-slide').stop().animate({
            width: 0,
            opacity: 0
        }, 180)
        // btn.siblings('.play-slide').fadeToggle(1000,'linear');



    })
    // open.click(function () {
    //     open.siblings('.play-btn-follow').animate({
    //         right: -318,
    //     }, 850)
    //     open.siblings('.play-slide').stop().animate({

    //         width: 360,
    //         opacity: 1
    //     }, 180)
    //     // open.siblings('.play-slide').fade
    //     open.hide();
    //     open.siblings('.play-btn').show();
    //     // open.siblings('.play-slide').css('opacity','1');

    // })
    follow2.click(function () {
        follow.css('right', -318);
        follow2.animate({
            right: -318,
        }, 850, function () {
            follow2.hide();
            follow2.siblings('.play-btn-follow').show();
        })
        // btn.siblings('.play-slide').css('opacity','1').toggle();
        follow2.siblings('.play-slide').stop().animate({
            width: 320,
            opacity: 1
        }, 180)
        // btn.siblings('.play-slide').fadeToggle(1000,'linear');

    })

















})