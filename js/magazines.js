(function ($) {
	var map, layer;
//	var mapBounds = new OpenLayers.Bounds(0.000000, -4302.000000, 7265.000000, 0.000000);
	var mapMinZoom = 0;
	var mapMaxZoom = 6;
	var mapMaxResolution = 0.500000;
	var isMob = window.innerWidth < 480;
	var zLevel = isMob? 3 : 4;
	var collages = {
		185: {
			size: [-20000.000000, -4590.000000,0],
			pos: [4200, -1924, zLevel],
				map : [-4608.000000, 7168.000000],
		},
		186: {
			size: [-20000.000000, -2920.000000, 0],
			pos: [750, -1975,zLevel],
			map : [-2560.000000, 7168.000000]
		},
		187: {
			size: [-20000.000000, -3190.000000,-150.000000],
			pos: [4452, -2230,zLevel],
			map : [-3072.000000, 8192.000000]
		}
	}

	imageID =currentMap;
	//if(currentMap === 187)
	//	$('.issues-text').hide()
	//var gridBounds = new OpenLayers.Bounds(0.000000, -4302.000000, 7265.000000, 0.000000);
	$('')
var gridBounds = new OpenLayers.Bounds(0.000000, collages[imageID]['map'][0], collages[imageID]['map'][1], 0.000000);
	var mapBounds = new OpenLayers.Bounds(0.000000, collages[imageID]['map'][0], collages[imageID]['map'][1], 0.000000);

 var restrict = new OpenLayers.Bounds(collages[imageID]['size'][0], collages[imageID]['size'][1], 17265.000000, collages[imageID]['size'][2]);
	function init() {
	  var options = {
	    controls: [],
	    maxExtent : gridBounds,
	    minResolution: mapMaxResolution,
	    numZoomLevels: mapMaxZoom+1,
			restrictedExtent: restrict,//mapBounds
			//minZoom: 1,
			//maxZoom: 5
	  };
		console.log($('#map'+currentMap));
		if($('#map'+currentMap)[0].className === 'olMap'){
			$('#map'+currentMap).remove();
		}
	  map = new OpenLayers.Map('map'+currentMap, options);
	  template_directory = "/wp-content/themes/tardif/images";
	  console.dir(imageID)
	  layer = new OpenLayers.Layer.XYZ( "MapTiler layer", template_directory+'/'+imageID+"/${z}/${x}/${y}.png", {
	    transitionEffect: 'resize',
	    //isBaseLayer: true,
	    tileSize: new OpenLayers.Size(256, 256),
	    tileOrigin: new OpenLayers.LonLat(gridBounds.left, gridBounds.top),
	    //gutter: 0,
			//leftTolerance: -1300,
			wrapDateLine: true,
	  });
	  map.addLayer(layer);
	  map.zoomToExtent(new OpenLayers.Bounds(0.000000, collages[imageID]['map'][0], collages[imageID]['map'][1], 0.000000));

	  var mousePercent = function(evt){
	    lonlat = map.getLonLatFromViewPortPx({x:evt.pageX,y:evt.pageY});
	    lon = lonlat.lon/30
	    lat = Math.abs(lonlat.lat/18.46)
	    return {lon: lon, lat: lat};
	  }
	  var editorials = [];
	  map.addControl(new OpenLayers.Control.Navigation(
	    {
				dragPan: function(){
					console.log('dragged');
				},
	      zoomWheelEnabled: false,
	      defaultClick: function(evt){
	        console.log(mousePercent(evt));
	    }
	  }));
	  map.addControl(new OpenLayers.Control.PanZoom());
	  map.addControl(new OpenLayers.Control.MousePosition({  numDigits: 0 }));
	  map.addControl(new OpenLayers.Control.Permalink());
	  //map.setCenter(new OpenLayers.LonLat(2077, 1.5),4)
		map.setCenter(new OpenLayers.LonLat(collages[currentMap]['pos'][0], collages[currentMap]['pos'][1]),collages[currentMap]['pos'][2])
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
//$('.pdf-img').hide();
var replace;
if(currentMap === 187){
	$('.issues-text').css('pointer-events','none');
}

$('.pdf_overlay').mouseenter(function(e){
	if(currentMap === 187)
		return;
	console.dir($(this).offset().left)
	replace = $('.'+$(this)[0].className.split(' ')[1].replace('overlay','img'));
	replace.css('left',$(this).offset().left-30);
	replace.show();
});
$('.pdf_overlay').mouseleave(function(){
	replace.hide();
});
$('.pdf-img').css({
	bottom: 67
});
$(window).scroll(function(e){
	$('.pdf-img').css({
		bottom: 67+window.scrollY
	});
});

//whether z_in is showing
var z_in = true;
var z_out = true;
var both = true;
var buttonString = '#OpenLayers_Control_PanZoom_15_zoomin, #OpenLayers_Control_PanZoom_15_zoomout, '+
	'#OpenLayers_Control_PanZoom_16_zoomin, #OpenLayers_Control_PanZoom_16_zoomout,'+
	'#OpenLayers_Control_PanZoom_17_zoomin, #OpenLayers_Control_PanZoom_17_zoomout, '+
	'#OpenLayers_Control_PanZoom_18_zoomin, #OpenLayers_Control_PanZoom_18_zoomout';
$('.olButton').click(function(){
	console.dir($(this));
	if(both){
		$(this).addClass('noZoom');
		//z_in = false;
		both = false;
	}
	else {
		$('.noZoom').removeClass('noZoom');
		both = true;
	}
});

//$('#OpenLayers_Control_PanZoom_39_zoomworld, #OpenLayers_Control_PanZoom_39_pandown, #OpenLayers_Control_PanZoom_39_panright, #OpenLayers_Control_PanZoom_39_panleft').css('display','none!important');

})(jQuery);
