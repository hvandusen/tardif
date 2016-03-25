(function ($) {
	var up,left,accel;
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
		currentAttr.removeClass('current');
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
			z--;
			if(i===totalPics-1){
				currentAttr = $(e).parent().prev();
				currentAttr.toggleClass('current');
			}
		});
		z+=40;
		accel = -1*accel;
		dumps++;
		range = window.innerWidth-325;
		rangeHeight = window.innerHeight-325-64;
		rangeX = Math.random()*range;
		if(rangeX<230)
			rangeY = 64+(.3+Math.random()*.2)*rangeHeight
		else
			rangeY = 64+Math.random()*rangeHeight;
		randX = (1.5+Math.random()*3)
		randY = (4+Math.random()*3)
		point = {
			x:rangeX,//*(.4+Math.random()*.6),///(randY>5?randX+1:randX),
			y:rangeY//window.innerHeight/randY
		};
	}
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
			currentAttr.removeClass('current');
		}
	});
	
	$('.season_image').mouseenter(function(){
		//$(this).css('transform','rotate(8deg)');
		setTimeout(function(){
			$(this).delay(200).css({'transform':'rotate(0deg)'});	
		},200)
		
		if($(this).parent().prev()!== currentAttr){
			currentAttr.removeClass('current');
			currentAttr=$(this).parent().prev()
			currentAttr.addClass('current');
		}
		console.log(currentAttr.index())
	});
	
	$('.season_image').mouseleave(function(){
		//$(this).css('transform','rotate(0deg)');
	});
	
	$(document).ready(function(){
		$('.brand_title').click(function(){
			var thisText = $(this).text()
			brandL = $('.brandID').length;
			
			console.dir($('.brandID'))
			$('.brandID').map(function(i,e){
				if(thisText===$(e).text()){
					window.eee = $(e);
					dumpImages($(e).next())
				}	
			});
		});
		
	});
})(jQuery);