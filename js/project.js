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
				$(e).addClass('word-'+i).attr("data-text",$(this).html());
			});
				var justHovered;
				if(window.innerHeight>480){
						$("#bio p span").mouseenter(function(){
							justHovered = $(this);
						//	newClass = 'hovered-'+Math.floor(Math.random()*100);//($(this).className.indexOf(hovered)>-1 ? 'hovered-'+Math.random() : 'hovered')
							$(this).addClass('hovered');
        			$(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        			function (e) {
            	$(this).removeClass('hovered');
        		});
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
