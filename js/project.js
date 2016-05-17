(function ($) {
	window.addEventListener('mousewheel', mouseWheelEvent);

	// For Firefox
	window.addEventListener('DOMMouseScroll', mouseWheelEvent);

	function mouseWheelEvent(e) {
	    var delta = e.wheelDelta ? e.wheelDelta : -e.detail;
	}
	var smallEnough = window.innerWidth < 1222;
	var isMob =  window.innerWidth < 480;

	function applySquiggle(el){
		console.log('from project')
		$(el).append('<div class="squiggle"></div>');
		var squigWidth = //Math.floor($(el).width()/19)*19+19//(smallEnough? 0 : 1);
		Math.floor($(el).width()/19)*19+(el === '.current' && window.innerWidth<480 ? 16 : 0);
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
		console.log('squiggle amt')
		console.log($(this).find('.squiggle').length)
		//console.log($(this).find('.squiggle'))
		if($(this).find('.squiggle').length>0 || $(this).hasClass('current-page') || $(this).hasClass('actual'))
			return;
			else{
				//console.log('added a squig')
				$('.squigHover').removeClass('squigHover');
				$(this).addClass('squigHover');
				$(this).addClass('current-page');
				applySquiggle('.squigHover');
			}
	})

	$('.magazines .link').mouseenter(function(){
		if($(this).hasClass('current'))
			return;
			//console.dir($(this).hasClass('current'));
			$(this).addClass('current');
			$(this).addClass('squigHover');
			applySquiggle('.squigHover');
	});

	$('.link').mouseleave(function(){
		if($(this).hasClass('actual')){
			//console.log('you shouldnt change this')
		}
			if(!$(this).hasClass('squigHover') || $(this).hasClass('actual'))
				return;
				//if($(this).hasClass('actual'))
				//	return;
			//console.log('was a hover squig')
			$(this).find('.squiggle').hide()
			$(this).find('.squiggle').remove();
			$(this).removeClass('current');
			$(this).removeClass('current-page');
			$(this).removeClass('squigHover');
			//$(this).removeClass('current');
	});

})(jQuery);
