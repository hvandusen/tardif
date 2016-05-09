
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
}
#map { position: absolute; height: 100%; width: 100%; background-color: #FFFFFF; }

</style>

<body >
	<div class='top-bar magazines'>
		<?php $id = get_the_ID();?>
			<a class='link nav <?php if($id===185){echo 'current';} ?>' href='/#magazine-wsj'>WSJ. Magazine</a>,
			<a class='link nav <?php if($id===186){echo 'current';} ?>' href='/#magazine-top'>Top,</a>
			<a class='link nav <?php if($id===198){echo 'current';} ?>' href='/#magazine-v'>V and VMan</a>
		</div>
<div class='magazine <?php echo $id; ?>'>

<div id='map<?php echo $id; ?>' ></div>
<div class='magazine-issuez'>
	<div class='issues-text' >
	<?php if($id != 187){
		echo '<a>Issue </a>';}
		 ?>
<?php //
			$pdfCount = 1;
		  $pdfs = get_field('pdfs');
		  if(is_array($pdfs) && !empty($pdfs)){
			foreach($pdfs as $row){
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
			echo '<div class="mag-role">' . get_field('magazine_role') . '</div>';
			$pdfCount = 1;
		  $pdfs = get_field('pdfs');
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
