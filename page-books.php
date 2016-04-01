
<style>
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


		echo '<div class="books">';
		while ( have_posts() ) : the_post();
			//while ( have_rows('book_list') ) : the_row();
					echo '<div class="book">';
					//echo '<span class="book_title" ' . the_sub_field('book_title') . '</span>';
					$image = get_field('book_image');
					echo '<a class="book_page" href="'. str_replace('/book/','/#book-',get_permalink()) . '">';
					echo '<img class="book_image -position-3-of-7" src="' . $image . '"></img>';
					echo '</a>';
					echo '</div>';
			//endwhile;
		endwhile;
		wp_reset_query();
		echo '</div>';
	?>
  <script src="<?php echo get_bloginfo('template_directory'); ?>/js/books.js"></script>
  <script src="<?php echo get_bloginfo('template_directory'); ?>/js/gyro.min.js"></script>
  <script src="<?php echo get_bloginfo('template_directory'); ?>/js/gyroScript.js"></script>
