(function ($) {
	var up,left,accel;
	$('.brand_title').click(function(){
		$('.brand_title').removeClass('revealed');
		$(this).addClass('revealed');
	})

	var point = (window.innerWidth>480 ? getPoint(window.innerWidth): getPointMobile(window.innerWidth));
	/*{
		x:window.innerWidth/4,
		y:window.innerHeight/5
		};
		if(window.innerWidth<480){
			point = {
				x:0,
				y:0
				};
		}*/
	var staggerAmount = (window.innerWidth>480 ? 5 : 2);
	var z = 100;
	var directions = [[1,1],[-1,1],[-1,-1],[1,-1]]
	up =1;
	left = -1;
	accel=1;
	var dumps = 0;
	var currentAttr;
	function dumpImages(brand){
		var seasons = brand.find('.season');
		var vert;
		point = (window.innerWidth>480 ? getPoint(window.innerWidth): getPointMobile(window.innerWidth));
		if(currentAttr)
			currentAttr.removeClass('showing');
		var totalPics = brand.find('.season_image').length;
		brand.find('.season').addClass('active');
		dx = -1//directions[(dumps%4)][0];
		dy = 1//directions[(dumps%4)][1];
		brand.find('.season_image').map(function(i,e){
			vert = $(e)[0].className.indexOf('vert')>0;
			$(e).removeClass('inactive');
			$(e).addClass('active');
			console.log(point.y)
			$(e).css({
				'z-index': z,
				'left':point.x+'px',
				'top':(vert? Math.random()*30 : point.y)+'px',
			});
			point.x += (dx*staggerAmount);
			point.y += (dy*staggerAmount);
			if(point.x+330>window.innerWidth || point.y+$(e).height()>window.innerHeight-67 || point.x<0 || point.y<0 ){
				dumps++
				dx = -1//directions[(dumps%4)][0];
				dy = 1//directions[(dumps%4)][1];
				if(point.y<0)
					point.y=4;
				if(point.x<0)
					point.x=4;
			}
			if(window.innerWidth<480 && (point.y <0 || point.x<0)){
				console.log('sww')
				dumps++
				dx = directions[(dumps%4)][0];
				dy = directions[(dumps%4)][1];
				point.x = 18;
				point.y = 20;
			}
			z--;
			if(i===totalPics-1){
				currentAttr = $(e).parent().prev();
				//console.dir($(e))
				currentAttr.toggleClass('showing');
			}
		});
		z+=40;
		accel = -1*accel;
		dumps++;
		//vert = $(e)[0].className.indexOf('vert')>0;
		//

	}
if(window.innerWidth<480){
	$('.season_image').css('max-width',window.innerWidth-20);
}


	$(window).resize(function(){
		console.log(window.innerWidth)
	});

function getPoint(w){
	console.log(w)
	var range = w*.62;//-375;
	//three 64 bars worth
	if(window.innerWidth>959){
		range = w*.56;
		console.log('bigger ' + range);
		rangeHeight = window.innerHeight*.25;
	}
	else if(window.innerWidth>809){
		range = w*.4;
		console.log('big ' + range);
		rangeHeight = window.innerHeight*.20;
	}
	else if(window.innerWidth>680){
		range = w*.32;
		console.log(range);
		console.log('med-big' + range);
		rangeHeight = window.innerHeight*.15;
	}
	else if(window.innerWidth>480){
		range = w*.3;
		console.log(range);
		console.log('med ' + range);
		rangeHeight = window.innerHeight*.08;
	}
	rangeX = Math.random()*range;
	rangeY = Math.random()*rangeHeight;
	if(rangeY<0){
		rangeY = 0
	}
	return {
		x: rangeX,
		y: rangeY
	}
}

function getPointMobile(w){
	rangeX = w*.15;
	rangeY = (window.innerHeight-450);
	//three 64 bars worth
	return {
		x: Math.random()*rangeX,
		y: Math.random()*rangeY
	}
}


	$('.brandID').map(function(i,e){
			console.log($('.brandID').length)
			rev = $('.brandID')[$('.brandID').length-1-i];
				dumpImages($(rev).next());
				//adjust vert images
			//}
		});

	$('.see_all_ads').click(function(){
		$('.brandID').map(function(i,e){
				//if(thisText===$(e).text()){
					dumpImages($(e).next())
				//}
			});
	});
	$(body).click(function(e){
		console.log(e);
	})
	$('.season_image').click(function(){
		console.log('clicked');
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

	$('.season_image').map(function(e,i){
		//$(i).css('transform','rotate('+(-10+Math.floor(Math.random()*20))+'deg)');
	});
	$('.season_image').mouseenter(function(){
		//$(this).css('transform','rotate(8deg)');
		setTimeout(function(){
			$(this).delay(200).css({'transform':'rotate(0deg)'});
		},200)
		$('.showing').removeClass('showing');
		$(this).parent().prev().addClass('showing');
		if($(this).parent().prev()!== currentAttr){
			currentAttr.removeClass('showing');
			currentAttr=$(this).parent().prev()
			currentAttr.addClass('showing');
		}
		console.log(currentAttr.index())
	});

	$('.season_image').mouseleave(function(){
		$('.showing').removeClass('showing');
		//$(this).css('transform','rotate(0deg)');

	});
	$(document).ready(function(){
		var clickCount = 0;
		$('.brand_title').click(function(){
			if(clickCount===0){
				$('.season').removeClass('active');
			}
			clickCount++;
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
