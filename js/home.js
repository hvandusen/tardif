(function ($) {

	var count=0;
	$('footer .nav').addClass('current-page')

	var mobile = window.innerWidth<480;
	$("#bio p span").map(function(i,e){
	})
	    //event handler to set the focus()
			$('.envelope').on('touchstart', function () {
	        $(this).focus();   // inside this function the focus works
	        focused = $(this); // just for the example when I click next on fiddle
					$(this).text('pierret@gmail.com');
	    });
	$(".envelope").click(function(){
		e.preventDefault();
		return;
		 var html = $(this).html();
		 if(!mobile)
			$(this).html($('.copied').html())
		else {
			$(this).html('pierret@gmail.com');
			$(this).select();
		}
		setTimeout(function(){
			$(".envelope").html(html);

		},3000);
	});

if(mobile){
	$('.email-container').appendTo($('#bio'));
}


	var moveCount = 0;
//	$("#bio").css('color',);
$('.bottom-bar').css({
	'position':'fixed',
	'animation':'none',
	'bottom': '0px'
});
// if(window.innerWidth<480)
// $('.envelope').click(function(e){
// 	e.preventDefault();
// });

})(jQuery);
