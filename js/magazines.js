(function ($) {
	var map, layer;
	var mapBounds = new OpenLayers.Bounds(-15000.000000, -2202.000000, 17265.000000, 0.000000);
	var mapMinZoom = 2;
	var mapMaxZoom = 5;
	var mapMaxResolution = 0.50000;
	var gridBounds = new OpenLayers.Bounds(-5000.000000, -2202.000000, 7065.000000, 0.000000);
	function init() {
	  var options = {
	    controls: [],
	    maxExtent : gridBounds,
	    minResolution: mapMaxResolution,
	    numZoomLevels: mapMaxZoom+1,
			restrictedExtent: mapBounds
	  };
	  map = new OpenLayers.Map('map', options);
	  template_directory = "/wp-content/themes/tardif/images";
	  imageID =$('.magazine')[0].className.split(' ')[1]
	  console.dir(imageID)
	  layer = new OpenLayers.Layer.XYZ( "MapTiler layer", template_directory+'/'+imageID+"/${z}/${x}/${y}.png", {
	    transitionEffect: 'resize',
	    isBaseLayer: true,
	    tileSize: new OpenLayers.Size(256, 256),
	    tileOrigin: new OpenLayers.LonLat(gridBounds.left, gridBounds.top),
	    gutter: 0,
			wrapDateLine: true
	  });
	  map.addLayer(layer);
	  map.zoomToExtent(mapBounds);

	  var mousePercent = function(evt){
	    lonlat = map.getLonLatFromViewPortPx({x:evt.pageX,y:evt.pageY});
	    lon = lonlat.lon/30
	    lat = Math.abs(lonlat.lat/18.46)
	    return {lon: lon, lat: lat};
	  }
	  var editorials = [];
	  map.addControl(new OpenLayers.Control.Navigation(
	    {
	      zoomWheelEnabled: false,
	      defaultClick: function(evt){
	        console.log(mousePercent(evt));
	    }
	  }));
	  map.addControl(new OpenLayers.Control.PanZoom());
	  map.addControl(new OpenLayers.Control.MousePosition({  numDigits: 0 }));
	  map.addControl(new OpenLayers.Control.Permalink());
	  map.setCenter(new OpenLayers.LonLat(2077, 0),4)//
	}
	init();
	var mobile = window.innerWidth<480;

	$('.olButton').css({//'#OpenLayers_Control_PanZoom_44_zoomin, #OpenLayers_Control_PanZoom_44_zoomout').css({
			'right': (mobile ? '10px' : '20px'),
			'left':'auto',
	});
	$('.olControlPanZoom.olControlNoSelect').css({
		'top':(mobile ? '-48px' : '-36px'),
	});
	$('.olControlPermalink.olControlNoSelect').hide();
$('.pdf-img').hide();
var replace;
$('.pdf_overlay').mouseenter(function(e){
	console.dir($(this).offset().left)
	replace = $('.'+$(this)[0].className.split(' ')[1].replace('overlay','img'));
	replace.css('left',$(this).offset().left);
	replace.show();
});
$('.pdf_overlay').mouseleave(function(){
	replace.hide();
});


})(jQuery);
