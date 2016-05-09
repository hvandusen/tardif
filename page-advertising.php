<?php
		$trackCategory = "";
		$args = array(
			'post_type'=> 'brand',
			'orderby'	=> 'menu_order',
			'order'    => 'DESC'
			//#drag and drop
		);
		$querystr = "
		 SELECT wposts.*
		 FROM $wpdb->posts wposts, $wpdb->postmeta wpostmeta
		 WHERE wposts.ID = wpostmeta.post_id
		 AND wpostmeta.meta_key = 'custom-key'
		 AND wposts.post_type = 'page'
		 ORDER BY wpostmeta.meta_value DESC
		 ";
		query_posts($args . "&order=ASC");
		query_posts( $args );

		echo "<div class='top-bar ads'>";
		 	$postCount = 0;
		 	while ( have_posts() ) : the_post();
		echo "<a class='top-brand brand_title '>";
		 	if ($wp_query->current_post == $wp_query->post_count-1) :
		echo 'and ';
		 	endif;

		echo ucwords(get_the_title());
		 	if ($wp_query->current_post !== $wp_query->post_count-1) :
		echo ', ';
		 	endif;
			echo '</a>';
		 	$postCount = $postCount+1;
		 	endwhile;

			echo "</div>";
				// Reset Query
				wp_reset_query();

 		$trackCategory = "";
		$args = array(
			'post_type'=> 'brand',
			'orderby'	=> 'menu_order',
			'order'    => 'DESC'
			//#drag and drop
		);
		query_posts( $args );
		echo '<ul class="brands">';
		while ( have_posts() ) : the_post();
			echo '<li class="brand">';
			echo '<a class="brandID">'. get_the_title() .'</a>';
			if( have_rows('seasons') ):
				echo '<ul class="seasons">';
			    while ( have_rows('seasons') ) : the_row();
				$attr = get_sub_field('season_attr');
			?>
				<li class='season'>
					<div class='season_attribution'>
						<a class='season_attr'><?php echo $attr; ?></a>

					</div>
					<div class='season_images'>
						<?php if( have_rows('season_images') ): ?>
							<?php while ( have_rows('season_images') ) : the_row();
								$imag = get_sub_field('season_image');
								$imgUrl = $imag['sizes']['medium_medium'];
								$sizes = getimagesize($imgUrl);
								$vertical = $sizes[0]<$sizes[1];
							?>
								<img class='season_image <?php 	if($vertical == 1){ echo 'vert';} ?>' src='<?php echo $imgUrl; ?>'>
							</img>
							<?php endwhile; ?>
					</div>
						<?php endif; ?>
				</li>
				<?php
				echo '</li>';
				endwhile;
				echo '</ul>';
				endif;
			?>

	<?php
		endwhile;
		echo '</ul>';
		?>
<script src="<?php echo get_bloginfo('template_directory'); ?>/js/editorial.js"></script>
