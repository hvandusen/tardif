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
					$("#bio p span").mouseenter(function(){
					$('.word').removeClass('word');
					$(this).addClass('word');
			 });
			 var words = 0;
			 
	});

})(jQuery);
