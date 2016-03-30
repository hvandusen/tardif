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

	});
})(jQuery);
