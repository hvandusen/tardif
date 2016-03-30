
<style>

.olImageLoadError {  display: none !important; }
#OpenLayers_Control_Permalink_48 {
	display:none;
}
.bottom-bar {
	border-bottom: solid black 3px;
	bottom: 64px;
	animation: bottom-up .2s ease-in;
}

</style>

<body >
	<div class='top-bar magazines'>
		<?php $id = get_the_ID();?>
			<a class='link nav <?php if($id===185){echo 'current';} ?>' href='/#magazine-wall-street-journal-magazine'>WSJ. MAGAZINE</a>,
			<a class='link nav' href='/#magazine-top'>TOP</a>, and
			<a class='link nav' href='/#magazine-vman'>VMAN</a>
		</div>
<div class='magazine <?php echo get_the_ID(); ?>'>
<div id='map' ></div>

<div class='magazine-issuez'>
	Issue
<?php //
			$pdfCount = 0;
		  $pdfs = get_field('pdfs');
		  if(is_array($pdfs) && !empty($pdfs)){
			foreach($pdfs as $row){ ?>
			<?php
				echo '<a style="display:inline" class="pdf_overlay" target="_blank" href="' . $row['pdf'] . '">';
				echo "<span class='pdf-rowz'>";
				echo $pdfCount. ', ';
				echo '<span class="pdf-img" style="display: none; background-image: url(' . $row['image']['sizes']['medium'] . ')"></span>';
				echo "</span>";
				echo '</a>';
				$pdfCount = $pdfCount+1;
				}
			} ?>
	</div>
</div>
<script>
var title = "<?php	the_title(); ?>";

</script>

<script src="<?php echo get_bloginfo('template_directory'); ?>/js/OpenLayers.js"></script>
	<script src="<?php echo get_bloginfo('template_directory'); ?>/js/magazines.js"></script>
