$(function () {
	  //下拉菜单
$('.nav>ul>li').hover(function() {

    $(this).children('ul').stop().slideDown(500);
    $(this).children('ul').css('z-index',100)
}, function() {
    $(this).children('ul').stop().slideUp(500);
})
// $('.nav>ul>li').mouseover(function() {
//     //显示ul要让当前这个li里面的ul显示
//     //当前li用this查找
//     $(this).children('ul').slideDown(100);
// });
// //2.鼠标离开ul隐藏li
// $('.nav>>ul>li').mouseout(function() {
//     $(this).children('ul').slideUp(100);
// })
				$('.flexslider').flexslider({
				directionNav: true,
				pauseOnAction: false,
				slideshowSpeed: 3000
			});
})