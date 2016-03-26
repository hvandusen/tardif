
<?php




				$trackCategory = "";
				$args = array(
					'post_type'=> 'brand',
					'orderby'	=> 'menu_order',
					'order'    => 'ASC'
					//#drag and drop
				);
				query_posts( $args );

				echo "<div class='top-bar ads'>";

					while ( have_posts() ) : the_post();
					?>
					<a class='top-brand brand_title'><?php
					if ($wp_query->current_post == $wp_query->post_count-1) :
					echo 'and ';
					endif;
					?><?php echo get_the_title(); ?><?php
					if ($wp_query->current_post !== $wp_query->post_count-1) :
					echo ',';
					endif;
					echo '</a>';
					endwhile;

				echo "</div>";
				// Reset Query
				wp_reset_query();
			?>



		<?php $trackCategory = "";
		$args = array(
			'post_type'=> 'brand',
			'orderby'	=> 'menu_order',
			'order'    => 'ASC'
			//#drag and drop
		);
		query_posts( $args );
		//echo '<span class="title">' . the_title() . '</span>';

		//dummy brands //dummy brands //dummy brands //dummy brands //dummy brands

		echo '<ul class="brands">';
		//dummy brands //dummy brands //dummy brands //dummy brands //dummy brands

		while ( have_posts() ) : the_post();
			echo '<li class="brand">';
			echo '<a class="brandID">'. get_the_title() .'</a>';

	?>
			<!-- <span class='brand_title'> <?php the_title() ?><span class='brand_dividers'>&bull;</span> </span> -->
			<?php
			if( have_rows('seasons') ):
				echo '<ul class="seasons">';
			 	// loop through the rows of data
			    while ( have_rows('seasons') ) : the_row();
				$season = get_sub_field('season_name');
				$company = get_sub_field('season_company');
				$role = get_sub_field('season_role');
			?>
				<li class='season'>
					<div class='season_attribution'>
						<a class='season_attr'><?php echo $season; ?></a>
						<a class='company_attr'><?php echo $company; ?></a>
						<a class='role_attr'><?php echo $role; ?></a>

						<?php if( have_rows('season_people') ): ?>
								<div class='people'>
							<?php while ( have_rows('season_people') ) : the_row();?>
								<a class='nname'><?php the_sub_field('season_person'); ?>: <?php the_sub_field('season_person_role'); ?></a>
							<?php endwhile; ?>
								</div>
						<?php endif; ?>
					</div>
					<div class='season_images'>
						<?php if( have_rows('season_images') ): ?>
							<?php while ( have_rows('season_images') ) : the_row();
								$imag = get_sub_field('season_image');
								$imgUrl = $imag['sizes']['medium_medium'];

							?>

								<img class='season_image' src='<?php echo $imgUrl; ?>'></img>
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
