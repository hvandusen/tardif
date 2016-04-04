(function ($) {

	window.addEventListener('mousewheel', mouseWheelEvent);

	// For Firefox
	window.addEventListener('DOMMouseScroll', mouseWheelEvent);

	function mouseWheelEvent(e) {
	    var delta = e.wheelDelta ? e.wheelDelta : -e.detail;
	}

	$(document).ready(function(){
		$('.top-bar.magazines a.link').click(function(){
		})

		$('.bottom-bar .title').click(function(){
			window.location = '/#';
		})

		var text_string = "Pierre Tardif is a New York-based art director and graphic designer. ";
		setInterval(function(){
			text_string = text_string+text_string.substr(0,1);
			text_string = text_string.substr(1, text_string.length-1);
			console.log(text_string)
			$('title').text(text_string);
		},300)

//newString = myString+myString.substr(0,1)
//newString = newString.substr(1, newString.length-1)
	});
})(jQuery);
