(function ($) {
	var map, layer;
//	var mapBounds = new OpenLayers.Bounds(0.000000, -4302.000000, 7265.000000, 0.000000);
	var mapMinZoom = 0;
	var mapMaxZoom = 6;
	var isMob = window.innerWidth < 480;
	var zLevel = isMob? 3.7:4;
var mapMaxResolution = 0.500000;

	var collages = {
		185: {
			size: [-20000.000000, -4590.000000,0],
			pos: [(isMob? 4190 : 4200), (isMob? -1704 : -1904), zLevel],
				map : [-4608.000000, 7168.000000],
		},
		186: {
			size: [-20000.000000, -2920.000000, 0],
			pos: [750, (isMob? -1804 : -1954),zLevel],
			map : [-2560.000000, 7168.000000]
		},
		187: {
			size: [-20000.000000, -3190.000000,-150.000000],
			pos: [(isMob? 5232 : 4452), (isMob? -2040 : -2210),zLevel],
			map : [-3072.000000, 8192.000000]
		}
	}

	imageID =currentMap;
	//if(currentMap === 187)
	//	$('.issues-text').hide()
	//var gridBounds = new OpenLayers.Bounds(0.000000, -4302.000000, 7265.000000, 0.000000);
	var homePageAction = window.location.hash === '';
var gridBounds = new OpenLayers.Bounds(0.000000, collages[imageID]['map'][0], collages[imageID]['map'][1], 0.000000);
	var mapBounds = new OpenLayers.Bounds(0.000000, collages[imageID]['map'][0], collages[imageID]['map'][1], 0.000000);
var layer;
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
		if($('#map'+currentMap)[0].className === 'olMap'){
			$('#map'+currentMap).remove();
		}
	  map = new OpenLayers.Map('map'+currentMap, options);
	  template_directory = "/wp-content/themes/tardif/images";
	  layer = new OpenLayers.Layer.XYZ( "MapTiler layer", template_directory+'/'+imageID+"/${z}/${x}/${y}.png", {
	    transitionEffect: 'resize',
			buffer:1,
	    //isBaseLayer: true,
	    tileSize: new OpenLayers.Size(256, 256),
	    tileOrigin: new OpenLayers.LonLat(gridBounds.left, gridBounds.top),
	    //gutter: 0,
			//leftTolerance: -1300,
			wrapDateLine: true,
			preload: 3,
			strategies: [new OpenLayers.Strategy.Refresh({force: true})]
	  });
		//layer.addTile(mapBounds);
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
	      zoomWheelEnabled: false,
	      defaultClick: function(evt){
	    }
	  }));
	  map.addControl(new OpenLayers.Control.PanZoom());
	  map.addControl(new OpenLayers.Control.MousePosition({  numDigits: 0 }));
	  map.addControl(new OpenLayers.Control.Permalink());
	  //map.setCenter(new OpenLayers.LonLat(2077, 1.5),4)
		//map.setCenter(new OpenLayers.LonLat(collages[currentMap]['pos'][0]+400, collages[currentMap]['pos'][1]), collages[currentMap]['pos'][2]);
		map.setCenter(new OpenLayers.LonLat(collages[currentMap]['pos'][0]-(homePageAction ? 500 : 0), collages[currentMap]['pos'][1]), collages[currentMap]['pos'][2]);
		lonlat = new OpenLayers.LonLat(collages[currentMap]['pos'][0], collages[currentMap]['pos'][1]);
			//map.moveTo(lonlat,4,{duration: 10});
			//map.panTo(lonlat)
//console.log('post')
		//map.zoomTo(3.8);
		return map;
	}
	returnedMap = init();

//returnedMap.render(new OpenLayers.LonLat(collages[currentMap]['pos'][0], collages[currentMap]['pos'][1]));
	$(window).load(function(i){
		time = 0;
		if(!homePageAction)
			return;
		var i = 0;
		var times = 50;
	while(i<times){
		if(layer.numLoadingTiles>0)
break;
			time += i/5;
			setTimeout(function(j) {
					return function() {
						//console.log(layer.numLoadingTiles)

							////console.log("var is now", j);
							lonlat = new OpenLayers.LonLat(collages[currentMap]['pos'][0]-(500-10*j), collages[currentMap]['pos'][1]);
							//lonlat = new OpenLayers.LonLat(collages[currentMap]['pos'][0], collages[currentMap]['pos'][1]);
							returnedMap.panTo(lonlat);
							layer.strategies[0].refresh()
							//returnedMap.zoomTo(4);
							//returnedMap.render();
					}
			}(i), time);
			i = i+1
	}
		//lonlat = new OpenLayers.LonLat(collages[currentMap]['pos'][0], collages[currentMap]['pos'][1]);
		//returnedMap.panTo(lonlat);
		//map.setCenter(new OpenLayers.LonLat(collages[currentMap]['pos'][0]+900, collages[currentMap]['pos'][1]), collages[currentMap]['pos'][2]);
	})

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


$('.magazines > .link').mouseenter(function(){
	if($(this).hasClass('current'))
		return;
		//console.dir($(this).hasClass('current'));
		$(this).addClass('current');
		$(this).addClass('squigHover');
		squig(this);
});

$('.magazines > .link').mouseleave(function(){
		if(!$(this).hasClass('squigHover'))
			return;
			$(this).find('.squiggle').remove();
		$(this).removeClass('current');
		$(this).removeClass('squigHover');
		//$(this).removeClass('current');
});

//$('#OpenLayers_Control_PanZoom_39_zoomworld, #OpenLayers_Control_PanZoom_39_pandown, #OpenLayers_Control_PanZoom_39_panright, #OpenLayers_Control_PanZoom_39_panleft').css('display','none!important');


})(jQuery);
