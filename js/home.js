(function ($) {
	var count=0;
	$('footer .nav').addClass('current-page')
	$('body').mousemove(function(){

	});

	var mobile = window.innerWidth<480;

	$(".envelope").click(function(){
		$(this).hide();
		$('.copied').show();
		setTimeout(function(){
			$('.copied').hide();
			$('.envelope').show();
		},3000);
	});

if(mobile){
	$('.envelope').appendTo($('#bio'));
}

	var moveCount = 0;
//	$("#bio").css('color',);

})(jQuery);
