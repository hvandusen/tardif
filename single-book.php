<?php //get_header();
?>
<div class='top-bar single_book'><a href='/#books'> Back </a></div>
<div class='book_page_info'>
	<div class='book_text'>
		<?php the_field('book_title') ?>:
		<?php the_field('book_page_info') ?></div>
</div>
<div class='book_role'><?php the_field('book_role'); ?> </div>
<div class='book_page_images'>
<?php
	 while ( have_rows('book_page_images') ) : the_row();
		$season = get_sub_field('book_page_image');
		//echo '<img src="' . $season .'"></img>';
	endwhile;
	echo '</div>';
	//echo '<div class="next">';
	//echo next_post_link( '%link','next book');
	//echo '</div>';
	//get_footer();
	?>
