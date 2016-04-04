(function ($) {
	var count=0;
	$('footer .nav').addClass('current-page')
	$('body').mousemove(function(){

	});

	$(".envelope").click(function(){
		$(this).hide();
		$('.copied').show();
		setTimeout(function(){
			$('.copied').hide();
			$('.envelope').show();
		},3000);
	});

	var moveCount = 0;
//	$("#bio").css('color',);
	 function colorWheel(entry)
        {
            var key;
            entry = entry%1535
            var text = "rgb(";
            var num = entry%256;
            if(entry >= 0 && entry < 256)
            	text= text+ "0,255,"+num+")";
            else if(entry>255 && entry<512)
				text= text+ "0,"+(255-num)+",255)";
			else if(entry>511 && entry<768)
            	text= text+ num +",0,255)";
			else if(entry>767 && entry<1024)
            	text= text+ "255,0,"+(255-num)+")";
            else if(entry>1023 && entry<1280)
            	text= text+ "255,"+num+",0)";
            else if(entry>1279 && entry<1535)
            	text= text+ (255-num)+",255,0)";
            return text;
        }


})(jQuery);
