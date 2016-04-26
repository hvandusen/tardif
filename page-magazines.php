<?php get_header(); ?>
<style>

.olImageLoadError {  display: none !important; }
#OpenLayers_Control_Permalink_48 {
	display:none;
}
.bottom-bar {
	border-bottom: solid black 3px;
	bottom: 64px;
	animation: bottom-up .5s ease-in;
	position: absolute;
	z-index: 2000;
}
#map { position: absolute; height: 100%; width: 100%; background-color: #FFFFFF; }

</style>

<body >
<script src='https://code.jquery.com/jquery-2.2.3.min.js'></script>
	<div class='top-bar magazines'>
		<?php $id = 185;//get_the_ID();?>
			<a class='link nav <?php if($id===185){echo 'current';} ?>' href='/#magazine-wall-street-journal-magazine'>WSJ. Magazine</a>,
			<a class='link nav <?php if($id===186){echo 'current';} ?>' href='/#magazine-top'>Top,</a>
			<a class='link nav <?php if($id===198){echo 'current';} ?>' href='/#magazine-vman'>V and VMan</a>
		</div>
<div class='magazine <?php echo '185'; ?>'>
<div id='map' ></div>

<div class='magazine-issuez'>
	<div class='issues-text'>
	<a>Issue</a>
<?php //
			$pdfCount = 1;
		  $pdfs = get_field('pdfs', $id);
		  if(is_array($pdfs) && !empty($pdfs)){
			foreach($pdfs as $row){ ?>
			<?php
				echo '<a style="display:inline" class="pdf_overlay pdf-overlay-' . $pdfCount . '" target="_blank" href="' . $row['pdf'] . '"
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

<script src="<?php echo get_bloginfo('template_directory'); ?>/js/OpenLayers.js"></script>
	<script src="<?php echo get_bloginfo('template_directory'); ?>/js/magazines.js"></script>
	<script>
	//remove arrows
	for(var i=0;i<4;i++){
		$($('#main .olButton')[i]).css('display','none');
	}
	$($('#main .olButton')[5]).css('display','none');

	</script>
<?php get_footer(); ?>
