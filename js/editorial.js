(function ($) {
	var up,left,accel;
	$('.season_image').map(function(i,e){
		var r = Math.random()*7-3.5;
		$(e).css({
			'transform': 'rotate('+r+'deg)'
		});
	});
	var point = (window.innerWidth>480 ? getPoint(window.innerWidth): getPointMobile(window.innerWidth));

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
			//console.log(point.y)
			$(e).css({
				'z-index': z,
				'left':point.x+'px',
				'top':(vert? Math.abs(Math.random()*200) : point.y)+'px',
			});
			point.x += (dx*staggerAmount);
			point.y += (dy*staggerAmount);
			if(window.innerWidth>480)
			if(point.x+330>window.innerWidth || point.y+$(e).height()>window.innerHeight-67 || point.x<0 || point.y<0 ){
				console.log(point)
				dumps++
				dx = -1//directions[(dumps%4)][0];
				dy = 1//directions[(dumps%4)][1];
				if(point.y<0)
					point.y=4;
				if(point.x<0)
					point.x=4;
			}
			if(window.innerWidth<480 && (point.y <0 || point.x<0)){
				//console.log('sww')
				dumps++
				dx = directions[(dumps%4)][0];
				dy = directions[(dumps%4)][1];
				point.x = 18;
				point.y = 20;
			}
			z--;
			if(vert  && window.innerWidth<480 ){
				point.y = Math.floor(Math.random()*100)
				console.log('moved')
			}
			if(i===totalPics-1){
				currentAttr = $(e).parent().prev();
				////console.dir($(e))
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
$('.top-brand').addClass('revealed');


function getPoint(w){
	var range = w*.62;//-375;
	//three 64 bars worth
	if(window.innerWidth>959){
		range = w*.56;
		//console.log('bigger ' + range);
		rangeHeight = window.innerHeight*.25;
	}
	else if(window.innerWidth>809){
		range = w*.4;
		//console.log('big ' + range);
		rangeHeight = window.innerHeight*.20;
	}
	else if(window.innerWidth>680){
		range = w*.32;
		//console.log(range);
		//console.log('med-big' + range);
		rangeHeight = window.innerHeight*.15;
	}
	else if(window.innerWidth>480){
		range = w*.3;
		rangeHeight = window.innerHeight*.08;
	}
	rangeX = Math.random()*range;
	rangeY = (.3+Math.random()*.7)*rangeHeight;
if(rangeY<0)
	 rangeY = 0;
	 console.log(rangeY)
	return {
		x: rangeX,
		y: rangeY
	}
}

function getPointMobile(w){
	rangeX = w*.15;
	rangeY = (window.innerHeight-300);
	//three 64 bars worth
	if(rangeY>300)
		rangeY =(window.innerHeight-300);
	return {
		x: Math.random()*rangeX,
		y: Math.random()*rangeY
	}
}


	if(window.innerWidth>480){
		$('.season_image').mouseenter(function(){
			//console.log('entered')
			//$(this).css('transform','rotate(8deg)');

			$('.showing').removeClass('showing');
			$(this).parent().prev().addClass('showing');
			if($(this).parent().prev()!== currentAttr){
				currentAttr.removeClass('showing');
				currentAttr=$(this).parent().prev()
				currentAttr.addClass('showing');
			}
			//console.log(currentAttr.index())
		});

		$('.season_image').mouseleave(function(){
			$('.showing').removeClass('showing');
			//$(this).css('transform','rotate(0deg)');

		});
	}
	var startStuff = function (){

	}
	var setup = 0;

	$(document).ready(function(){
		var clickCount = 0;
		$('.brand_title').click(function(){
			setup === 0 && $('.brand_title').removeClass('revealed');
			setup++;
			//$('.brand_title').removeClass('revealed');
			$(this).addClass('revealed');
			$('.black').removeClass('black');
			if(clickCount===0){
				$('.season').removeClass('active');
			}
			clickCount++;
			var thisText = $(this).text().replace(',','').replace('and ','');

			$('.brandID').map(function(i,e){
				console.log(thisText+' matched '+$(e).text().toUpperCase());
				if(thisText.toUpperCase()===$(e).text().toUpperCase()){

					dumpImages($(e).next())
				}
			});
		});
		$('.season_image').click(function(){

			$(this).removeClass('active');
			$(this).addClass('inactive');
			var brand = $(this).closest('.seasons');
			if(brand.find('.inactive').length === brand.find('.season_image').length){
				$('.brand_title').map(function(i,e){
					var t1 = brand.prev().text().toUpperCase();
					var t2 = $(e).text().replace(',','').toUpperCase();
					console.log(t1+ ' '+t2 );
					console.log(t1===t2);
					if(t2===t1){
						$(e).removeClass('revealed');
						brand.find('.active').removeClass('active');
					}
				});
				console.log(brand.prev().text())

				currentAttr.removeClass('showing');
			}

	});
		$('.brandID').map(function(i,e){
				//console.log($('.brandID').length)
			var	rev = $('.brandID')[$('.brandID').length-1-i];
					dumpImages($(rev).next());

			});
	});
if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
	$('.season_image').css({
	'max-height':'none'
	})
}
})(jQuery);
