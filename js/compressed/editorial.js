!function($){function n(n){var a=n.find(".season"),t;s=window.innerWidth>480?e(window.innerWidth):i(window.innerWidth),w&&w.removeClass("showing");var l=n.find(".season_image").length;n.find(".season").addClass("active"),dx=-1,dy=1,n.find(".season_image").map(function(n,e){t=$(e)[0].className.indexOf("vert")>0,$(e).removeClass("inactive"),$(e).addClass("active"),$(e).css({"z-index":d,left:s.x+"px",top:(t?30*Math.random():s.y)+"px"}),s.x+=dx*o,s.y+=dy*o,(s.x+330>window.innerWidth||s.y+$(e).height()>window.innerHeight-67||s.x<0||s.y<0)&&(g++,dx=-1,dy=1,s.y<0&&(s.y=4),s.x<0&&(s.x=4)),window.innerWidth<480&&(s.y<0||s.x<0)&&(g++,dx=h[g%4][0],dy=h[g%4][1],s.x=18,s.y=20),d--,n===l-1&&(w=$(e).parent().prev(),w.toggleClass("showing"))}),d+=40,r=-1*r,g++}function e(n){var e=.62*n;return window.innerWidth>959?(e=.56*n,rangeHeight=.25*window.innerHeight):window.innerWidth>809?(e=.4*n,rangeHeight=.2*window.innerHeight):window.innerWidth>680?(e=.32*n,rangeHeight=.15*window.innerHeight):window.innerWidth>480&&(e=.3*n,rangeHeight=.08*window.innerHeight),rangeX=Math.random()*e,rangeY=Math.random()*rangeHeight,rangeY<0&&(rangeY=0),{x:rangeX,y:rangeY}}function i(n){return rangeX=.15*n,rangeY=window.innerHeight-450,{x:Math.random()*rangeX,y:Math.random()*rangeY}}var a,t,r,s=window.innerWidth>480?e(window.innerWidth):i(window.innerWidth),o=window.innerWidth>480?5:2,d=100,h=[[1,1],[-1,1],[-1,-1],[1,-1]];a=1,t=-1,r=1;var g=0,w;window.innerWidth<480&&$(".season_image").css("max-width",window.innerWidth-20),$(".top-brand").addClass("revealed"),window.innerWidth>480&&($(".season_image").mouseenter(function(){$(".showing").removeClass("showing"),$(this).parent().prev().addClass("showing"),$(this).parent().prev()!==w&&(w.removeClass("showing"),w=$(this).parent().prev(),w.addClass("showing"))}),$(".season_image").mouseleave(function(){$(".showing").removeClass("showing")}));var l=function(){},v=0;$(document).ready(function(){var e=0;$(".brand_title").click(function(){0===v&&$(".brand_title").removeClass("revealed"),v++,$(this).addClass("revealed"),$(".black").removeClass("black"),0===e&&$(".season").removeClass("active"),e++;var i=$(this).text().replace(",","").replace("and ","");$(".brandID").map(function(e,a){i===$(a).text()&&n($(a).next())})}),$(".season_image").click(function(){$(this).removeClass("active"),$(this).addClass("inactive");var n=$(this).closest(".seasons");n.find(".inactive").length===n.find(".season_image").length&&($(".brand_title").map(function(e,i){var a=n.prev().text().toUpperCase(),t=$(i).text().replace(",","").toUpperCase();console.log(a+" "+t),console.log(a===t),t===a&&($(i).removeClass("revealed"),n.find(".active").removeClass("active"))}),console.log(n.prev().text()),w.removeClass("showing"))}),$(".brandID").map(function(e,i){var a=$(".brandID")[$(".brandID").length-1-e];n($(a).next())})}),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&$(".season_image").css({"max-height":"none"})}(jQuery);