!function($){function e(){var e={controls:[],maxExtent:m,minResolution:i,numZoomLevels:t+1,restrictedExtent:c};"olMap"===$("#map"+currentMap)[0].className&&$("#map"+currentMap).remove(),o=new OpenLayers.Map("map"+currentMap,e),template_directory="/wp-content/themes/tardif/images",n=new OpenLayers.Layer.XYZ("MapTiler layer",template_directory+"/"+imageID+"/${z}/${x}/${y}.png",{transitionEffect:"resize",buffer:1,tileSize:new OpenLayers.Size(256,256),tileOrigin:new OpenLayers.LonLat(m.left,m.top),wrapDateLine:!0,preload:3,strategies:[new OpenLayers.Strategy.Refresh({force:!0})]}),o.addLayer(n),o.zoomToExtent(new OpenLayers.Bounds(0,l[imageID].map[0],l[imageID].map[1],0));var a=function(e){return lonlat=o.getLonLatFromViewPortPx({x:e.pageX,y:e.pageY}),lon=lonlat.lon/30,lat=Math.abs(lonlat.lat/18.46),{lon:lon,lat:lat}},r=[];return o.addControl(new OpenLayers.Control.Navigation({zoomWheelEnabled:!1,defaultClick:function(e){}})),o.addControl(new OpenLayers.Control.PanZoom),o.addControl(new OpenLayers.Control.MousePosition({numDigits:0})),o.addControl(new OpenLayers.Control.Permalink),o.setCenter(new OpenLayers.LonLat(l[currentMap].pos[0]-(p?500:0),l[currentMap].pos[1]),l[currentMap].pos[2]),lonlat=new OpenLayers.LonLat(l[currentMap].pos[0],l[currentMap].pos[1]),o}var o,n,a=0,t=6,r=window.innerWidth<480,s=r?3:4,i=.5,l={185:{size:[-2e4,-4790,0],pos:[4200,-1904,s],map:[-4608,7168]},186:{size:[-2e4,-2920,0],pos:[750,-1954,s],map:[-2560,7168]},187:{size:[-2e4,-3190,-150],pos:[4452,-2210,s],map:[-3072,8192]}};imageID=currentMap;var p=""===window.location.hash,m=new OpenLayers.Bounds(0,l[imageID].map[0],l[imageID].map[1],0),u=new OpenLayers.Bounds(0,l[imageID].map[0],l[imageID].map[1],0),n,c=new OpenLayers.Bounds(l[imageID].size[0],l[imageID].size[1],17265,l[imageID].size[2]);returnedMap=e(),$(window).load(function(e){if(time=0,p)for(var e=0,o=50;o>e&&!(n.numLoadingTiles>0);)time+=e/5,setTimeout(function(e){return function(){lonlat=new OpenLayers.LonLat(l[currentMap].pos[0]-(500-10*e),l[currentMap].pos[1]),returnedMap.panTo(lonlat),n.strategies[0].refresh()}}(e),time),e+=1});var d=window.innerWidth<480;$(".olButton").css({right:d?"10px":"20px",left:"auto"}),$(".olControlPanZoom.olControlNoSelect").css({top:d?"-48px":"-36px"}),$(".olControlPermalink.olControlNoSelect").hide();var L;187===currentMap&&$(".issues-text").css("pointer-events","none"),$(".pdf_overlay").mouseenter(function(e){187!==currentMap&&(L=$("."+$(this)[0].className.split(" ")[1].replace("overlay","img")),L.css("left",$(this).offset().left-30),L.show())}),$(".pdf_overlay").mouseleave(function(){L.hide()}),$(".pdf-img").css({bottom:67}),$(window).scroll(function(e){$(".pdf-img").css({bottom:67+window.scrollY})});var y=!0,_=!0,f=!0,g="#OpenLayers_Control_PanZoom_15_zoomin, #OpenLayers_Control_PanZoom_15_zoomout, #OpenLayers_Control_PanZoom_16_zoomin, #OpenLayers_Control_PanZoom_16_zoomout,#OpenLayers_Control_PanZoom_17_zoomin, #OpenLayers_Control_PanZoom_17_zoomout, #OpenLayers_Control_PanZoom_18_zoomin, #OpenLayers_Control_PanZoom_18_zoomout";$(".olButton").click(function(){f?($(this).addClass("noZoom"),f=!1):($(".noZoom").removeClass("noZoom"),f=!0)}),window.innerWidth>480&&($(".magazines > .link").mouseenter(function(){$(this).hasClass("current")||($(this).addClass("current"),$(this).addClass("squigHover"),squig(this))}),$(".magazines > .link").mouseleave(function(){$(this).hasClass("squigHover")&&($(this).find(".squiggle").remove(),$(this).removeClass("current"),$(this).removeClass("squigHover"))}))}(jQuery);