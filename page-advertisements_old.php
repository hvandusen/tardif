<?php get_header(); ?>
<?php
		$trackCategory = "";
		$args = array(
			'post_type'=> 'brand',
			'orderby'	=> 'menu_order',
			'order'    => 'ASC'
			//#drag and drop
		);
		query_posts( $args );
		//echo '<span class="title">' . the_title() . '</span>';
		
		//dummy brands //dummy brands //dummy brands //dummy brands //dummy brands
		echo '<div style="margin-top:1%; position:relative;">';
		echo '<ul class="brands">';
		//dummy brands //dummy brands //dummy brands //dummy brands //dummy brands
		
		while ( have_posts() ) : the_post();
			echo '<li class="brand">';

	?>		
			<span class='brand_title'> <?php the_title() ?><span class='brand_dividers'>&bull;</span> </span>
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
						<a class='season_attr'>Season: <?php echo $season; ?></a>
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
							<?php while ( have_rows('season_images') ) : the_row();?>
								<img class='season_image' src='<?php the_sub_field('season_image'); ?>'></img>
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
		echo '</div>';
		// Reset Query
		wp_reset_query();
	?>
<?php get_footer(); ?>