(function ($) {

	window.addEventListener('mousewheel', mouseWheelEvent);

	// For Firefox
	window.addEventListener('DOMMouseScroll', mouseWheelEvent);
	
	function mouseWheelEvent(e) {
	    var delta = e.wheelDelta ? e.wheelDelta : -e.detail;
	}
	
	$(document).ready(function(){
		/*
		if(!$('.brands').parent().offset())
			return;
		var imageBoxTop = $('.brands').parent().offset().top;
		$('.brands').parent().height(window.innerHeight-imageBoxTop+'px')
		$('.brand').each(function(v, b) {
			//console.dir($(b).find('.season_image'))
			//console.dir($('.season_images'))
			count = 0;
	    	$(b).find('.season_images').each(function(i, c) {
		    	//console.dir($(c).children())
		    	for(var j=0;j<$(c).children().length;j++){
			    	$(c.children[j]).css('z-index', 20 - count*2);
			    	count++;
		    	}	
	    	});
    	});
    	
		var vertical;
		$('.brand_title').click(function(){
			$('.current.season').toggleClass('current');
			$('.brand').removeClass('active');
			$(this).parent().toggleClass('active');
			//$('.season_image, .season_attribution').hide();
			//$(this).parent().find('.season_image, .season_attribution:eq(0)').show();
			$(this).parent().find('.season_image').show();
			$(this).parent().find('.seasons').find('.season:first').addClass('current')
			images = $(this).parent().find('.seasons').find('.season:first')[0].children[1];
			$(images).find('img:first').addClass('top-image')
			//$(this).find('.season_image').addClass('top_image');	
			
			if(window.innerWidth<768){
				$('.active .season_attribution').map(function(i,e){
					underImage = $(e).next().children()[0];
					var offset = underImage.offset;

					$(this).css('display','block');
					phone = window.innerWidth<480;
					$(e).css({
						'position':'absolute',
						'background':'white',
						//'width': (phone?'95%':'95%'),
						'width':underImage.width+'px',
						'max-width': (phone?'425px':'625px'),
						'height':underImage.height+'px',
						'top': underImage.style.top,
						'left': underImage.offsetLeft+'px',
						//'border':'2px inset #6699ff',
						'z-index': 1+parseInt(underImage.style.zIndex),
						'padding':'0',
						'margin':'0',
						'opacity':'.9',
						'background':'#cccccc'
					});	
					$(e).click(function(){
						$(this).css('display','none');
					})
					//console.log(e.style)
				});
			}

		
		});
		$(window).load(function(){
			//shiftImages($('.season_image'));
		});
		
		$('.season_image').load(function(e){
			shiftImage($(this));
		});
		
		$('.season_image').click(function(){
			if($(this).hasClass('top-image') && $(this).next().length !==0){
				$(this).hide();
				$(this).removeClass('top-image');
				$(this).next().addClass('top-image');
			}
			else if($(this).hasClass('top-image') && $(this).next().length ==0){
				$(this).hide();
				$(this).removeClass('top-image');
				
				$(this).closest('.season').removeClass('current');
				$(this).closest('.season').next().addClass('current');
				//$(this).next().addClass('top-image');
				nextSeasonImg = $(this).closest('.season').next().find('.season_images').find('.season_image:first');
				
				if(nextSeasonImg.length===0)
					$('.active').removeClass('active')
					//console.log($('.active').removeClass('active')	)
				$(nextSeasonImg).addClass('top-image')
				//todo: deactivate this brand, activate next
			}

		})
		function shiftImages(el){
			//console.log(el)
			phone = window.innerWidth<480;
			el.map(function(i,e){
				
				vertical = e.height > e.width;
				wideScreen = window.innerWidth/window.innerHeight>1;
				//console.dir(vertical);
				styles = ['dotted','dotted','double','groove','outset','ridge','solid']
				$(e).css({
					'top': (wideScreen?-4:28)+Math.floor(Math.random()*(vertical? 4:10))+'%',
					'right': (vertical? 10:0)+Math.floor(2+Math.random()*(vertical? 20:4))+'%',
					//border': 'solid black 5px',
					//'filter': 'blur(20px) grayscale(20%)',//styles[Math.floor(Math.random()*styles.length)]
					//'-webkit-filter': 'blur(0px) grayscale(0%)'
					
				});
				if(phone){
					$(e).css('top',35+Math.floor(Math.random()*8)+'%');
				}
			});
			//for(var i=-)
		}
		
		function shiftImage(e){	
			vertical = $(e)[0].height > $(e)[0].width;
			wideScreen = window.innerWidth/window.innerHeight>1;
			pushDown = false;
			
			console.dir($(e)[0].height)
			$(e).css({
				'top': (wideScreen?-4:25)+Math.floor(Math.random()*(vertical? 4:10))+'%',
				'right': (vertical? 10:0)+Math.floor(2+Math.random()*(vertical? 20:4))+'%',
				//border': 'solid black 5px',
				//'filter': 'blur(20px) grayscale(20%)',//styles[Math.floor(Math.random()*styles.length)]
				//'-webkit-filter': 'blur(0px) grayscale(0%)'
				
			});
			if(!vertical && !wideScreen){
				console.log('pushDown')
				$(e).css({'top': 20+Math.floor(Math.random()*(10))+'%'});
			}
			}
		var underImage;
		*/
	
	});
})(jQuery);