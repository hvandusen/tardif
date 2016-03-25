<?php get_header(); 
?>

<div class='book_page_info'>
	<h1> <?php the_field('book_title') ?> </h1>
	<a> <?php the_field('book_page_info') ?></a>
</div>

<div class='book_page_images'>
<?php 
	 while ( have_rows('book_page_images') ) : the_row();
		$season = get_sub_field('book_page_image');
		echo '<img src="' . $season .'"></img>';
	endwhile;	
	echo '</div>';
	echo '<a class="back" href="/books">back to books</a>';
	echo '<div class="next">';
	echo next_post_link( '%link','next book');
	echo '</div>';
	get_footer(); 
	?>
	