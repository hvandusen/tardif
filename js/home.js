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
	$(".envelope").click(function(e){
		//alert();
		e.preventDefault();
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
//$('#bio p').click(function(e){
$('.candusen').click(function(e){
	var t = $(e.target);
	//if(t.hasClass('word-112') || t.hasClass('word-113') || t.hasClass('word-114'))
	window.location = 'http://pierre.dev/wp-content/themes/tardif/css/webfont/RMRollerball.otf';//'http://candusen.net';

});
//$('.font-dl').attr({
// $('.candusen').attr({
//
// 		target: '_blank',
// 		href  : 'http://pierre.dev/wp-content/themes/tardif/css/webfont/RMRollerball.otf'
// 	});

$('.font-dl').click(function(e){

});

if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		$('.copied').text('pierret@gmail.com');
		//$('.copied').css('pointer-events','')
}

// if(window.innerWidth<480)
// $('.envelope').click(function(e){
// 	e.preventDefault();
// });

})(jQuery);
