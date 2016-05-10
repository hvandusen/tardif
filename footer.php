
	</div>
</div>
</div>
</div>


	<footer>
		<div class='bottom-bar'><div class='title'  class='nav home'>PIERRE TARDIF, Art Director </div>
	</footer>
</div>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/clipboard.js/1.5.8/clipboard.min.js"></script>
<script>var clip = new Clipboard('.clipboard')
clip.action = function(){
	if(window.innerWidth<480){
		$('.envelope').css('padding','24px 0 0px 0')
		$('.copied').text('pierret@gmail.com')
		return;
	}

	$('.envelope').css('opacity','0');
	$('.copied').css('opacity','1');
	setTimeout(function(){
		$('.envelope').css('opacity','1');
		$('.copied').css('opacity','0');

  },3000);
	return;
	var html = $('.envelope').html();
	if(!mobile)
	 $('.envelope').html($('.copied').html())
 else {
	 $('.envelope').html('pierret@gmail.com');
	 $('.envelope').select();
 }
 setTimeout(function(){
	 $(".envelope").html(html);

 },3000);
}

</script>
<script src="<?php bloginfo('template_directory'); ?>/js/jquery.ba-bbq.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/js/lettering.js"></script>

<?php include('includes/ajax.php'); ?>
<script>window.jQuery || document.write('<script src="<?php bloginfo('template_directory'); ?>/js/compressed/jquery.min.js"><\/script>')</script>
<?php wp_footer(); ?>
<script>
	(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
	function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
	e=o.createElement(i);r=o.getElementsByTagName(i)[0];
	e.src='//www.google-analytics.com/analytics.js';
	r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
	ga('create','UA-XXXXX-X');ga('send','pageview');

</script>
</body>
</html>
