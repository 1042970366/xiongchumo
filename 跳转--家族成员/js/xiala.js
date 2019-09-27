$(function () {
	$('.xcm .guan').hover(function(){
	$(this).children('.er').stop().fadeIn(500);
    // $(this).children('.er').css('z-index',100)
}, function() {
    $(this).children('.er').stop().fadeOut(500);
	})
})