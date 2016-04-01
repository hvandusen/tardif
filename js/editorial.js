(function ($) {
	var up,left,accel;
	$('.brand_title').click(function(){
		$('.brand_title').removeClass('revealed');
		$(this).addClass('revealed');
	})

	var point = {
		x:window.innerWidth/3,
		y:window.innerHeight/3
		};
	var z = 100;
	var directions = [[1,1],[-1,1],[-1,-1],[1,-1]]
	up =1;
	left = -1;
	accel=1;
	var dumps = 0;
	var currentAttr;
	function dumpImages(brand){
		var seasons = brand.find('.season');
		var attr = brand.find('.season_attribution')
		if(currentAttr)
		currentAttr.removeClass('showing');
		var totalPics = brand.find('.season_image').length;
		brand.find('.season').addClass('active');
		dx = directions[(dumps%4)][0];
		dy = directions[(dumps%4)][1];
		brand.find('.season_image').map(function(i,e){
			$(e).removeClass('inactive');
			$(e).addClass('active');
			$(e).css({
				'z-index': z,
				'left':point.x+'px',
				'top':point.y+'px',
			});
			point.x += (dx*8);
			point.y += (dy*8);
			if(point.x+330>window.innerWidth || point.y+330>window.innerHeight-67 || point.x<0 || point.y<150){
				dumps++
				dx = directions[(dumps%4)][0];
				dy = directions[(dumps%4)][1];
			}
			z--;
			if(i===totalPics-1){
				currentAttr = $(e).parent().prev();
				console.dir(currentAttr)
				currentAttr.toggleClass('showing');
			}
		});
		z+=40;
		accel = -1*accel;
		dumps++;
		range = window.innerWidth-375;
		//three 64 bars worth
		if(window.innerHeight>750)
			rangeHeight = window.innerHeight-750;
		else {
			rangeHeight = 100;
		}
		rangeX = Math.random()*range;
		rangeY = Math.random()*rangeHeight;
		randX = (1.5+Math.random()*3);
		randY = (4+Math.random()*3);
		if(rangeY<0){
			rangeY = 0
		}
		point = {
			x:rangeX,//*(.4+Math.random()*.6),///(randY>5?randX+1:randX),
			y:rangeY//window.innerHeight/randY
		};
		console.log(point.y);

	}

	$(window).resize(function(){
		console.log(window.innerWidth)
	});

	$('.brandID').map(function(i,e){
			console.log($('.brandID').length)
			rev = $('.brandID')[$('.brandID').length-1-i];
				dumpImages($(rev).next());
			//}
		});


	$('.see_all_ads').click(function(){
		$('.brandID').map(function(i,e){
				//if(thisText===$(e).text()){
					dumpImages($(e).next())
				//}
			});
	});
	$('.season_image').click(function(){
		remaining = $('.season_image.active');
		console.dir(remaining.length)
		//point.x = $(remaining[remaining.length-1]).offset()['left'];
		//point.y = $(remaining[remaining.length-1]).offset()['top'];
		$(this).removeClass('active');
		$(this).addClass('inactive');
		if(remaining.length===1){
			currentAttr.removeClass('showing');
		}
	});

	$('.season_image').mouseenter(function(){
		//$(this).css('transform','rotate(8deg)');
		setTimeout(function(){
			$(this).delay(200).css({'transform':'rotate(0deg)'});
		},200)

		if($(this).parent().prev()!== currentAttr){
			currentAttr.removeClass('showing');
			currentAttr=$(this).parent().prev()
			currentAttr.addClass('showing');
		}
		console.log(currentAttr.index())
	});

	$('.season_image').mouseleave(function(){
		//$(this).css('transform','rotate(0deg)');
	});
	$(document).ready(function(){
		$('.brand_title').click(function(){
			var thisText = $(this).text().replace(',','').replace('and ','');
			console.log(thisText)
			$('.brandID').map(function(i,e){
				if(thisText===$(e).text()){
					dumpImages($(e).next())
				}
			});
		});

	});
})(jQuery);
