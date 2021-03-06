(function ($) {
	window.addEventListener('mousewheel', mouseWheelEvent);
	var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;
	if ((is_chrome)&&(is_safari)) {is_safari=false;}
	// For Firefox
	window.addEventListener('DOMMouseScroll', mouseWheelEvent);
	window.booksScrolled = 0;
	function mouseWheelEvent(e) {
		console.log(e)
		if(document.location.href.indexOf('book-')>0)
			return;
			if(window.innerWidth<480){
				window.sessionStorage.books = e.pageY
				return;
			}

	    var delta = e.wheelDelta ? e.wheelDelta : -e.detail;

				if(window.location.hash === '#books'){
					//console.log(window.sessionStorage.books)
					window.booksScrolled += e.deltaY
					if(!is_safari){
					window.sessionStorage.books = window.booksScrolled ;//window.scrollY;
					}
					else{
						 window.sessionStorage.books = window.scrollY;
						 console.log('uhh');
						console.log(window.sessionStorage.books)
					}
				}
	}
	var smallEnough = window.innerWidth < 1222;
	var isMob =  window.innerWidth < 480;
	window.isMob = isMob;
var squigWidths;
if(is_safari)
	squigWidths = isMob ? [11,16,22,33,38,43,49,54,60,65,71,76,98,103,109,111] :[49,66,74,91,98,116,147,164,171,189,196,213,238,245];
else {
	$('.page-id-365 .title span').addClass('notSafari');
	squigWidths = isMob ? [11,16,22,33,38,43,49,54,60,65,71,76,98,103,109,111] :[49,66,74,91,98,116,132,164,186,196,213,233,245];
}
function getClosest(width){
	var closest = 1000;
	ret = 0;
	squigWidths.map(function(e){
		if(Math.abs(width-e)<closest){
			ret = e;
			closest = Math.abs(width-e);
		}
	});
	return ret;
}
	function applySquiggle(el){
		//console.log('from project')
		var is_brand = $(el).hasClass('current');
		//console.log(el === '.current' && window.innerWidth<480)
		$(el).append('<div class="squiggle"></div>');
		//var squigWidth = Math.floor($(el).width()/19)*19+(el === '.current' && window.innerWidth<480 ? 16 : 0);
		//var squigWidth = Math.floor($(el).width()/19)*19+(is_current && window.innerWidth<480 ? 16 : 0);

		var squigWidth = Math.ceil($(el).width()/25)*24.9+(is_brand && window.innerWidth<480 ? 22 : 0);
		if(squigWidth<50)
			squigWidth = 50;
			squigWidth = getClosest($(el).width());
		//console.log($(el).width())
		//console.log(squigWidth)
		$(el).find('.squiggle').width(squigWidth);

		$(el).find('.squiggle').css('margin-left',-(squigWidth-$(el).width)/2+'px');
	}

	window.squig = applySquiggle;

	$(document).ready(function(){
		$('.top-bar.magazines a.link').click(function(){
		});

		//applySquiggle('.current-page');
		//applySquiggle('.current');

		$('.bottom-bar .title').click(function(){
			window.location = '/about';
		});

		$("#bio p").lettering('words');
		var linkToFont = false;
			$("#bio p span").map(function(i,e){
				$(e).addClass('word-'+i).attr("data-text",$(this).html().replace('&nbsp;',''));
				if($(e).text()==='Henry' || $(e).text()==='Van' || $(e).text().indexOf('Dusen')>-1 ){
						//$(e).html($(e).html().replace('<p></a>')
						//console.log($(e).html())
						$(e).wrap('<a target="_blank" href="http://candusen.net"></a>')
						$(e).addClass('candusen');
				}
				else if($(e).text()==='here'){
				}
				else if($(e).text()==='Click'){
					linkToFont = true;
				}
				if(linkToFont){
					$(e).wrap('<a href="http://pierretardif.net/wp-content/themes/tardif/css/webfont/RMrollerball.otf"></a>')
					$(e).addClass('dlFont');
				}
				if($(e).text()==='font.'){
					linkToFont = false;
				}
			});

				var justHovered;
				if(window.innerWidth>480){
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

				$('.magazines  .link').mouseenter(function(){
					return;
					$(this).addClass('current');
					$('.squiggle').remove();
					applySquiggle('.current');
					applySquiggle('.current-page');
				})
				$('.link').mouseleave(function(){
					return;
					$(this).removeClass('current');
					$(this).find('current').remove();
				})

			 var words = 0;

	});

	if(window.innerWidth<480)
		return;
	$('.moveUp .link').mouseenter(function(e){
		//console.log('squiggle amt')
		//console.log($(this).find('.squiggle').length)
		////console.log($(this).find('.squiggle'))
		if($(this).find('.squiggle').length>0 || $(this).hasClass('current-page') || $(this).hasClass('actual'))
			return;
			else{
				////console.log('added a squig')
				$('.squigHover').removeClass('squigHover');
				$(this).addClass('squigHover');
				$(this).addClass('current-page');
				applySquiggle('.squigHover');
			}
	})

	$('.magazines .link').mouseenter(function(){
		if($(this).hasClass('current'))
			return;
			////console.dir($(this).hasClass('current'));
			$(this).addClass('current');
			$(this).addClass('squigHover');
			applySquiggle('.squigHover');
	});

	$('.link').mouseleave(function(){
		if($(this).hasClass('actual')){
			////console.log('you shouldnt change this')
		}
			if(!$(this).hasClass('squigHover') || $(this).hasClass('actual'))
				return;
				//if($(this).hasClass('actual'))
				//	return;
			////console.log('was a hover squig')
			$(this).find('.squiggle').hide()
			$(this).find('.squiggle').remove();
			$(this).removeClass('current');
			$(this).removeClass('current-page');
			$(this).removeClass('squigHover');
			//$(this).removeClass('current');
	});


})(jQuery);
