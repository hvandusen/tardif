<?php get_header(); 
?>
<style>
#map { position: absolute; height: 60%; width: 100%; background-color: #FFFFFF; }
.olImageLoadError {  display: none !important; }
#OpenLayers_Control_Permalink_48 {
	display:none;
}

</style>
<body >
<div class='top-bar magazines'>
			<?php $id = get_the_ID();?>
		    <a class='link nav <?php if($id===185){echo 'current';} ?>' href='/magazine/wall-street-journal-magazine/'>WSJ. MAGAZINE</a>,
		    <a class='link nav <?php if($id===186){echo 'current';} ?>' href='/magazine/top/'>TOP</a>, and
		    <a class='link nav <?php if($id===187){echo 'current';} ?>' href='/magazine/vman/'>VMAN</a>
	    </div>
<div class='magazine <?php echo get_the_ID(); ?>'>
<div id='map' ></div>
<div class='magazine-issues-header'>
<?php	the_title(); ?> PDFS
</div>
<div class='magazine-issues'>
<?php //
		  $pdfs = get_field('pdfs'); 
		  if(is_array($pdfs) && !empty($pdfs)){
			foreach($pdfs as $row){ ?>
			<?php 
				echo '<a class="pdf_overlay" target="_blank" href="' . $row['pdf'] . '">';
				echo "<div class='pdf-row'>";
					echo '<div class="pdf-img" style="background-image: url(' . $row['image']['sizes']['medium'] . ')"></div>';
					echo "<div class='pdf-txt'>";
					echo  "<p class='pdf-text pdf-issue'><strong>Issue: " .  $row['mag_issue'] . "</strong></p>";
					echo "<p class='pdf-text pdf-role'>" . $row['mag_role'] . "</p>";
					echo "</div>";
				echo "</div>";
				echo '</a>';
				}
			} ?>
	</div>
</div>
	<script src="http://openlayers.org/api/2.13/OpenLayers.js" type="text/javascript"></script>
	<?php
	get_footer(); 
	?>
	