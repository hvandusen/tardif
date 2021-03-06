<?php get_header(); ?>
<style>

.olImageLoadError {  display: none !important; }
#OpenLayers_Control_Permalink_48 {
	display:none;
}
.bottom-bar {
	border-bottom: solid black 4px;
	bottom: 64px;
	animation: bottom-up .5s ease-in;

	z-index: 2000;
}
#map { position: absolute; height: 100%; width: 100%; background-color: #FFFFFF; }

</style>

<body >
<script src='https://code.jquery.com/jquery-2.2.3.min.js'></script>
	<div class='top-bar magazines'>
		<?php $id = 185;//get_the_ID();?>
			<a class='link nav <?php if($id===185){echo 'current';} ?>' href='/#magazine-wsj'>WSJ. Magazine</a>,
			<a class='link nav <?php if($id===186){echo 'current';} ?>' href='/#magazine-top'>Top,</a>
			<a class='link nav <?php if($id===198){echo 'current';} ?>' href='/#magazine-v'>V and VMan</a>
		</div>
<div class='magazine <?php echo '185'; ?>'>
<div id='map<?php echo $id; ?>' ></div>
<div class='mag-role'></div>
<div class='magazine-issuez'>
	<div class='issues-text'>
	<a>Open full issues here:</a>
<?php //
			$pdfCount = 1;
		  $pdfs = get_field('pdfs', $id);
		  if(is_array($pdfs) && !empty($pdfs)){
			foreach($pdfs as $row){ ?>
			<?php
			//if($id === 198)
				$linkClass = 'href="' . $row['pdf'] . '#view=fitW"';
			//else {
			//	$linkClass = '';
			//}
				echo '<a style="display:inline" rel="nofollow" class="pdf_overlay pdf-overlay-' . $pdfCount . '" target="_blank" '.$linkClass .'
				data-img="background-image: url(' . $row['image']['sizes']['small'] . ')">';

				if($pdfCount===count($pdfs)){
					$comma = '';
				}else{
					$comma = ', ';
				}
				echo $row['mag_issue'] . $comma;

				echo '</a>';

				$pdfCount = $pdfCount +1;
				}
			}
			echo '	</div>';
			echo '<div class="mag-role">' . get_field('magazine_role', $id) . '</div>';
			$pdfCount = 1;
		  $pdfs = get_field('pdfs', $id);
		  if(is_array($pdfs) && !empty($pdfs)){
			foreach($pdfs as $row){ ?>
			<?php
			echo '<div class="pdf-img pdf-img-' . $pdfCount . '" style=" background-image: url(' . $row['image']['sizes']['medium'] . ')"
			data-img="background-image: url(' . $row['image']['sizes']['medium'] . ')"></div>';
			$pdfCount = $pdfCount +1;
		}
	}?>

</div>
</div>

<script src="<?php echo get_bloginfo('template_directory'); ?>/js/compressed/OpenLayers.js"></script>
<script> currentMap = <?php echo $id; ?></script>
	<script src="<?php echo get_bloginfo('template_directory'); ?>/js/compressed/magazines.js"></script>
<?php get_footer(); ?>
