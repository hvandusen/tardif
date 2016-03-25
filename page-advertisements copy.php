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
		echo '<span class="title">' . the_title() . '</span>';
		echo '<ul class="brand">';
		
		while ( have_posts() ) : the_post();
	?>		
			<span class='brand_title'><?php the_title() ?> </span>
			<?php
				if( have_rows('ad_cards') ):
					
			 	// loop through the rows of data
			    while ( have_rows('ad_cards') ) : the_row();
			?>
				<?php 
					$img = get_sub_field('ad_image');
					$season = get_sub_field('ad_season');
					$company = get_sub_field('ad_company');
					$role = get_sub_field('ad_role');
					?>
		        	<li class='<?php the_title() ?> ad_card'>
		        	<img class='ad-image' src='<?php echo $img['url'] ?>' > </img>
		        	<div class='ad_attribution'>
						<a class='ad_season'> <?php echo $season ?> </a>
						<a class='ad_company'> <?php echo $company ?> </a>
						<a class='ad_role'> <?php echo $role ?> </a>
		        	
					
					
					<?php if( have_rows('ad_people') ): ?>
								<ul class='ad_person_list'>
							<?php 
								// loop through rows (sub repeater)
								while( have_rows('ad_people') ): the_row();
									// display each item as a list - with a class of completed ( if completed )
									?>
									<li><?php the_sub_field('ad_person_name'); ?> - <?php the_sub_field('ad_person_role'); ?></li>
								<?php endwhile; ?>	
								</ul>
								<?php endif; ?>							
					</div>
					</li>
					<?php
				endwhile;
				
				echo '</ul>';
				endif;
			?>
				
				
				
	<?php
		endwhile;

		// Reset Query
		wp_reset_query();
	?>
<?php get_footer(); ?>