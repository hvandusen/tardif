(function ($) {
	$(document).ready(function(){
	var move = false;
	$('#bg_image').click(function(){
		move = !move;
	});
	$('#bg_image').css('height',window.innerHeight/2+'px')
	$('#bg_image').mousemove(function(e){
		if(!move)
			return;
    var amountMovedX = (e.pageX *3);
    var amountMovedY = (e.pageY   * 5);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});
			
	});
})(jQuery);