(function ($) {
	var start;

	$(document).ready(function(){
		var count = 0;
		var current = 0;
		var angle = 3;
		var show = 3;
		//if(gyro.hasFeature('devicemotion'))
		gyro.frequency = 5;
		console.log(gyro.hasFeature('devicemotion'))

			//if(gyro.hasFeature('devicemotion'))
			gyro.startTracking(function(o) {
	        // o.x, o.y, o.z for accelerometer
	        // o.alpha, o.beta, o.gamma for gyro
	        if(count==0)
	        	start = o;


	        show = Math.floor(3.5+(o.x/5)*3.5)

	        if(show<7 && show>=0 && show!=angle)
	        	{
							$('.book').map(function(i,e){
								//console.log('visible: '+$(e).visible());
								if($(e).visible()){
									var image = $(e).find('.book_image');
									classes = $(image).classList
									$(image).addClass('-position-'+show+'-of-7');
		        			$(image).removeClass(classes[1]);
								}
							});

							//	if($(e).visible()){
									//console.log('visible');
									//console.log($(e));
									// classes = $('.book_image:visible')[current].classList
		        			// $($('.book_image:visible')[current]).addClass('-position-'+show+'-of-7');
		        			// $($('.book_image:visible')[current]).removeClass(classes[1]);
		        			// angle = show;
									// classes = $(e)[current].classList
		        			// $($(e)[current]).addClass('-position-'+show+'-of-7');
		        			// $($(e)[current]).removeClass(classes[1]);
		        			// angle = show;
									//}
								//});
	        	}
	        count++;
	    	});

	});
})(jQuery);
