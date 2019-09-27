$(function(){
    

    //showdiv函数,在距离顶部一段距离后淡入淡出
    function showDiv(){
        var topheight = $(document).scrollTop();
        if(topheight >= ($('.gif1').offset().top+36)){
            $('.return-top').fadeIn();
        }else{
            $('.return-top').fadeOut();
        }
    }
    //在浏览器滚动时调动showdiv代码,实现返回顶部图标的淡入淡出效果
    $(window).scroll(function(){
        showDiv();
    })
    //单击返回顶部,返回页面顶部
    $('.return-top').click(function(){
        $('body,html').animate({
			scrollTop : 0
		},720);
    })
})