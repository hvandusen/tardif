<?php get_header();?>



	<div class='dek'><span>Pierre Tardif is a New York-based art director and graphic designer.</span></div>
	<div class="main-img-cont">
	<?php
		$mainImg = get_field('home_image');
		if(is_array($mainImg) && !empty($mainImg)){
					echo '<img class="home_image" src="' . $mainImg['sizes']['large'] . '"></img>';
				}
		?>
	</div>
	<div id='bio'>
		<?php
		the_content();
		?>
	</div>




<?php
	get_footer();
	?>
