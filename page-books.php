
<style>
.bottom-bar {
  position: fixed;
  border-bottom: none;

}
      </style>
    <?php
		$trackCategory = "";
		$args = array(
			'post_type'=> 'book',
			'orderby'	=> 'menu_order',
			'order'    => 'ASC'
			//#drag and drop
		);
		query_posts( $args );
		//echo '<span class="title">' . the_title() . '</span>';

    ?>

    <?php
		echo '<div id="demo" class="books demo" >';
		while ( have_posts() ) : the_post();
			//while ( have_rows('book_list') ) : the_row();
					echo '<div class="book"><li>';
					//echo '<span class="book_title" ' . the_sub_field('book_title') . '</span>';
					$image = get_field('book_image');
					echo '<a class="book_page" href="'. str_replace('/book/','/#book-',get_permalink()) . '">';
					echo '<img class="book_image -position-3-of-7" src="' . $image . '"></img>';
					echo '</a>';
					echo '</li></div>';
			//endwhile;
		endwhile;
		wp_reset_query();
		echo '</div>';
	?>

  <script src="<?php echo get_bloginfo('template_directory'); ?>/js/books.js"></script>
  <script src="<?php echo get_bloginfo('template_directory'); ?>/js/gyro.min.js"></script>
  <script src="<?php echo get_bloginfo('template_directory'); ?>/js/gyroScript.js"></script>
  <!-- <script type='text/javascript' src="https://cdn.jsdelivr.net/jquery.fullpage/2.5.9/jquery.fullPage.min.js"></script> -->

  <script>
  if(false)
  $('#demo').fullPage({
    sectionSelector: '.book',
    controlArrows: false
    // more options here
  });
  </script>
