(function ($) {
	var thirdW;
	var thirdH;

	function isScrolledIntoView(elem)
	{
	    var $elem = $(elem);
	    var $window = $(window);

	    var docViewTop = $window.scrollTop();
	    var docViewBottom = docViewTop + $window.height();

	    var elemTop = $elem.offset().top;
	    var elemBottom = elemTop + $elem.height();

	    return ((docViewTop < elTop) && (docViewBottom > elBottom));
	}

$(window).scroll(function(e){

	if(window.location.hash === '#books'){
		window.sessionStorage.books = window.scrollY;
			console.dir(e);
	}
});

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

  $('.book_role').hide();

	$('.book').mouseenter(function(){
		//$(this).find('.book_role').text('she suckin');
		$(this).find('.book_role').show();
	});
	$('.book').mouseleave(function(){

		$(this).find('.book_role').hide();
	});

	function setBookSize(){
		return;
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
