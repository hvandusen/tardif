(function ($) {
	var start;

	$(document).ready(function(){
		var count = 0;
		var current = 0;
		var angle = 3;
		var show = 3;
		//if(gyro.hasFeature('devicemotion'))
		gyro.frequency = 15;
		console.log(gyro.hasFeature('devicemotion'))

			//if(gyro.hasFeature('devicemotion'))
			gyro.startTracking(function(o) {
	        // o.x, o.y, o.z for accelerometer
	        // o.alpha, o.beta, o.gamma for gyro
	        if(count==0)
	        	start = o;


	        show = Math.floor(3.5+(o.x/2)*3.5)

	        if(show<7 && show>=0 && show!=angle)
	        	{
							$('.book').map(function(i,e){
								//console.log('visible: '+$(e).visible());
								if($(e).visible()){
									current = i;
									console.log('current');
									var classes = $($('.book_image')[current]).prop('classList');
									console.log(classes);
									$($('.book_image')[current]).addClass('-position-'+show+'-of-7');
								 $($('.book_image')[current]).removeClass(classes[1]);
								 angle = show;
								}
							});

							//	if($(e).visible()){
									//console.log('visible');
									//console.log($(e));
									// var classes = $('.book_image')[current].classList
									 //$($('.book_image')[current]).addClass('-position-'+show+'-of-7');
		        			//$($('.book_image')[current]).removeClass(classes[1]);
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
