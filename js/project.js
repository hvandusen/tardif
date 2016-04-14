(function ($) {

	window.addEventListener('mousewheel', mouseWheelEvent);

	// For Firefox
	window.addEventListener('DOMMouseScroll', mouseWheelEvent);

	function mouseWheelEvent(e) {
	    var delta = e.wheelDelta ? e.wheelDelta : -e.detail;
	}

	$(document).ready(function(){
		$('.top-bar.magazines a.link').click(function(){
		});

		$('.bottom-bar .title').click(function(){
			window.location = '/#';
		});

		var text_string = "Pierre Tardif is a New York-based art director and graphic designer. ";
		setInterval(function(){
			text_string = text_string+text_string.substr(0,1);
			text_string = text_string.substr(1, text_string.length-1);

			$('title').text(text_string);
		},300);
		$("#bio p").lettering('words');
			$("#bio p span").map(function(i,e){
				$(e).addClass('word-'+i);
			});
				if(window.innerHeight>480){
					$('#bio').clone().attr('class','bio2').appendTo($('#bio').parent());
						$("#bio p span").mouseenter(function(){
							words = $('.'+$(this)[0].className.split(' ')[1]);
							console.dir(words);
							$(words[1]).css('opacity','0');
								$('.word').removeClass('word');
								$(words[0]).addClass('word');
						});
						$("#bio").css('visibility','hidden');
						$("#bio p span").mouseleave(function(){
							words = $('.'+$(this)[0].className.split(' ')[1]);
							$(words[1]).css('opacity','1');
							$(words[0]).removeClass('word');
						});
				}

				$('.moveUp').mouseenter(function(){
						$(this).addClass('showtop').removeClass('moveUp');

				});
				$('.moveUp').mouseleave(function(){

						$(this).removeClass('showtop').addClass('moveUp');

				});
			 var words = 0;

	});

})(jQuery);
