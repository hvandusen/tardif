!function($){function o(){var o={controls:[],maxExtent:l,minResolution:r,numZoomLevels:t+1,restrictedExtent:p};console.log($("#map"+currentMap)),"olMap"===$("#map"+currentMap)[0].className&&$("#map"+currentMap).remove(),e=new OpenLayers.Map("map"+currentMap,o),template_directory="/wp-content/themes/tardif/images",console.dir(imageID),n=new OpenLayers.Layer.XYZ("MapTiler layer",template_directory+"/"+imageID+"/${z}/${x}/${y}.png",{transitionEffect:"resize",tileSize:new OpenLayers.Size(256,256),tileOrigin:new OpenLayers.LonLat(l.left,l.top),wrapDateLine:!0}),e.addLayer(n),e.zoomToExtent(new OpenLayers.Bounds(0,s[imageID].map[0],s[imageID].map[1],0));var a=function(o){return lonlat=e.getLonLatFromViewPortPx({x:o.pageX,y:o.pageY}),lon=lonlat.lon/30,lat=Math.abs(lonlat.lat/18.46),{lon:lon,lat:lat}},i=[];e.addControl(new OpenLayers.Control.Navigation({zoomWheelEnabled:!1,defaultClick:function(o){console.log(a(o))}})),e.addControl(new OpenLayers.Control.PanZoom),e.addControl(new OpenLayers.Control.MousePosition({numDigits:0})),e.addControl(new OpenLayers.Control.Permalink),e.setCenter(new OpenLayers.LonLat(s[currentMap].pos[0],s[currentMap].pos[1]),s[currentMap].pos[2])}var e,n,a=0,t=6,r=.5,s={185:{size:[-2e4,-4590,0],pos:[4350,-1892,4],map:[-4608,7424]},186:{size:[-2e4,-2920,0],pos:[750,-1975,4],map:[-2560,7168]},187:{size:[-2e4,-3190,-150],pos:[4452,-2230,4],map:[-3072,8192]}};imageID=currentMap,$("");var l=new OpenLayers.Bounds(0,s[imageID].map[0],s[imageID].map[1],0),i=new OpenLayers.Bounds(0,s[imageID].map[0],s[imageID].map[1],0),p=new OpenLayers.Bounds(s[imageID].size[0],s[imageID].size[1],17265,s[imageID].size[2]);o();var m=window.innerWidth<480;$(".olButton").css({right:m?"10px":"20px",left:"auto"}),$(".olControlPanZoom.olControlNoSelect").css({top:m?"-48px":"-36px"}),$(".olControlPermalink.olControlNoSelect").hide();var c;187===currentMap&&$(".issues-text").css("pointer-events","none"),$(".pdf_overlay").mouseenter(function(o){187!==currentMap&&(console.dir($(this).offset().left),c=$("."+$(this)[0].className.split(" ")[1].replace("overlay","img")),c.css("left",$(this).offset().left-30),c.show())}),$(".pdf_overlay").mouseleave(function(){c.hide()}),$(".pdf-img").css({bottom:67}),$(window).scroll(function(o){$(".pdf-img").css({bottom:67+window.scrollY})});var u=!0,_=!0,d=!0,y="#OpenLayers_Control_PanZoom_15_zoomin, #OpenLayers_Control_PanZoom_15_zoomout, #OpenLayers_Control_PanZoom_16_zoomin, #OpenLayers_Control_PanZoom_16_zoomout,#OpenLayers_Control_PanZoom_17_zoomin, #OpenLayers_Control_PanZoom_17_zoomout, #OpenLayers_Control_PanZoom_18_zoomin, #OpenLayers_Control_PanZoom_18_zoomout";$(".olButton").click(function(){console.dir($(this)),d?($(this).addClass("noZoom"),d=!1):($(".noZoom").removeClass("noZoom"),d=!0)})}(jQuery);