$(function(){
	var menu = $("#menu");
	var position = menu.offset().top;

	$(window).scroll(function(){
		var top = $(window).scrollTop();

		if(top > position){
			menu.addClass('menuFull');
		}
		else{
			menu.removeClass('menuFull');
		}
	});
});