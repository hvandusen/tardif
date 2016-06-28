(function ($) {
	var thirdW;
	var thirdH;

	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;
	if ((is_chrome)&&(is_safari)) {is_safari=false;}
	window.scrollTo(0,window.sessionStorage.books)
	var screenPos = window.scrollY
	// if(is_safari){
	// 	 setInterval(function(){
	//
	// 	 	var yPos = window.scrollY;
	// 	 	if(yPos !==screenPos){
	// 	 		screenPos = yPos;
	// 	 		window.sessionStorage.books = screenPos;
	// 	 	}
	// 	},250)
	// }

	$('.books').hover(function(){
		console.log('set it to '+window.scrollY)
		//window.sessionStorage.books = window.scrollY;
	})

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



	$(document).ready(function(){

	setBookSize();
	$('.book').mousemove(function(e){
		step = 1/7;
		//wIndex = offset/$(this).width();
		//which = Math.floor(wIndex/step)
		right = Math.abs(e.clientX-this.offsetLeft)/$(this).width();
		which = Math.floor(right/step)
		img = $(this).find('.book_image');
		currentClass = img[0].classList[1];

		var whichMap = {
			0: 3,
			1: 0,
			2: 1,
			3: 2,
			4: 4,
			5: 5,
			6: 3
		};

		//which = whichMap[which];
		if(currentClass.indexOf(which.toString())<0){
			$(img).addClass('-position-'+which+'-of-7');
			$(img).removeClass(img[0].classList[1]);
		}
	})

	$(window).resize(function(){
		setBookSize()
	});

  $('.book_role').hide();
if(window.innerWidth>480)
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
