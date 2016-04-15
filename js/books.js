(function ($) {
	var thirdW;
	var thirdH;

window.onscroll = function(e){
	console.log(window.scrollY);
}

	$(document).ready(function(){
	setBookSize();
	$('.book').mousemove(function(e){
		step = 1/7;
		//wIndex = offset/$(this).width();
		//which = Math.floor(wIndex/step)
		right = Math.abs(e.clientX-this.offsetLeft)/$(this).width()
		which = Math.floor(right/step)
		img = $(this).find('.book_image');
		currentClass = img[0].classList[1];
		if(currentClass.indexOf(which.toString())<0){
			$(img).addClass('-position-'+which+'-of-7');
			$(img).removeClass(img[0].classList[1]);
		}
	})

	$(window).resize(function(){
		setBookSize()
	});

	function setBookSize(){
		thirdW = Math.floor(window.innerWidth*.32);
		thirdH = Math.floor(window.innerHeight*.32);
		if(false)
		$('.book').css({
			'width': thirdH+'px',
			'height': thirdH+'px',
		});
	}

	});
})(jQuery);
