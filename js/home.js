(function ($) {
	var count=0;
	$('footer .nav').addClass('current-page')
	$('body').mousemove(function(){
			/*count++;

		$('.dek').css({
		'letter-spacing':Math.floor(Math.sin((50+count)/100)*100)/70+'px',
		'word-spacing':Math.floor(Math.cos(count/100)*100)/70+'px'
		});

		moveCount+=4;*/
	});


	var moveCount = 0;
//	$("#bio").css('color',);
	var text_string = "Hello and welcome to Pierre Tardif's website site...";
	currentString = text_string.slice(0,18);
	charIndex = 18;
	setInterval(function(){
		currentString = currentString.slice(1,18)+ text_string.charAt(charIndex).toString();
		$('title').text(currentString);
		charIndex = (charIndex+1)%text_string.length;
	},3000)
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
