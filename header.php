<!doctype html class="<?php	echo get_the_title(); ?>">
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<title>Pierre Tardif, Art Director</title>
	<meta name="Description" CONTENT="Pierre Tardif is a New York based art director and graphic designer.
Tardif is best known for his work as Design Director of WSJ., a monthly style magazine published by The Wall Street Journal. ">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
	<link rel="stylesheet" href="http://openlayers.org/en/v3.14.0/css/ol.css" type="text/css">
	<script src="http://openlayers.org/en/v3.14.0/build/ol.js" type="text/javascript"></script>
	<script src="<?php bloginfo('template_directory'); ?>/js/compressed/modernizr.js"></script>
	<?php wp_head(); ?>
</head>
<div id='landscape'> Please refresh in portrait mode.</div>
<body  <?php body_class(); ?>>
<!-- <div id="wptime-plugin-preloader">

</div> -->
<?php $theId = get_the_ID();

?>

<div id="container" class=' <?php echo the_title().'page'; ?>'>
    <header id="header">
	    <div class='top-bar  moveUp'>
		    <a class='link nav<?php if($theId === 1){ echo ' current-page'; }?>' href='/#magazine-wsj'>EDITORIAL</a>,
		    <a class='link nav <?php if($theId === 9){ echo ' current-page'; }?>' href='/#books'>BOOKS</a>, AND
		    <a class='link nav' href='/#advertising'>ADVERTISING</a>
	    </div>
		 <!--<a href="<?php echo home_url( '/' ); ?>"><?php bloginfo( 'name' ); ?></a> <?php //the_title(); ?> -->
    </header>
    <div id="main" role="main">
			<div class='bbq'>
				<div class="bbq-content">
				<div class='bbq-default bbq-item'>
