!function($){function e(e){var a=e.find(".season"),o;r=window.innerWidth>480?n(window.innerWidth):i(window.innerWidth),w&&w.removeClass("showing");var l=e.find(".season_image").length;e.find(".season").addClass("active"),dx=-1,dy=1,e.find(".season_image").map(function(e,n){o=$(n)[0].className.indexOf("vert")>0,$(n).removeClass("inactive"),$(n).addClass("active"),$(n).css({"z-index":d,left:r.x+"px",top:(o?Math.abs(200*Math.random()):r.y)+"px"}),r.x+=dx*s,r.y+=dy*s,window.innerWidth>480&&(r.x+330>window.innerWidth||r.y+$(n).height()>window.innerHeight-67||r.x<0||r.y<0)&&(console.log(r),h++,dx=-1,dy=1,r.y<0&&(r.y=4),r.x<0&&(r.x=4)),window.innerWidth<480&&(r.y<0||r.x<0)&&(h++,dx=g[h%4][0],dy=g[h%4][1],r.x=18,r.y=20),d--,o&&window.innerWidth<480&&(r.y=Math.floor(100*Math.random()),console.log("moved")),e===l-1&&(w=$(n).parent().prev(),w.toggleClass("showing"))}),d+=40,t=-1*t,h++}function n(e){var n=.62*e;return window.innerWidth>959?(n=.56*e,rangeHeight=.25*window.innerHeight):window.innerWidth>809?(n=.4*e,rangeHeight=.2*window.innerHeight):window.innerWidth>680?(n=.32*e,rangeHeight=.15*window.innerHeight):window.innerWidth>480&&(n=.3*e,rangeHeight=.08*window.innerHeight),rangeX=Math.random()*n,rangeY=(.3+.7*Math.random())*rangeHeight,rangeY<0&&(rangeY=0),console.log(rangeY),{x:rangeX,y:rangeY}}function i(e){return rangeX=.15*e,rangeY=window.innerHeight-300,rangeY>300&&(rangeY=window.innerHeight-300),{x:Math.random()*rangeX,y:Math.random()*rangeY}}var a,o,t;$(".season_image").map(function(e,n){var i=7*Math.random()-3.5;$(n).css({transform:"rotate("+i+"deg)"})});var r=window.innerWidth>480?n(window.innerWidth):i(window.innerWidth),s=window.innerWidth>480?5:2,d=100,g=[[1,1],[-1,1],[-1,-1],[1,-1]];a=1,o=-1,t=1;var h=0,w;window.innerWidth<480&&$(".season_image").css("max-width",window.innerWidth-20),$(".top-brand").addClass("revealed"),window.innerWidth>480&&($(".season_image").mouseenter(function(){$(".showing").removeClass("showing"),$(this).parent().prev().addClass("showing"),$(this).parent().prev()!==w&&(w.removeClass("showing"),w=$(this).parent().prev(),w.addClass("showing"))}),$(".season_image").mouseleave(function(){$(".showing").removeClass("showing")}));var l=function(){},c=0;$(document).ready(function(){var n=0;$(".brand_title").click(function(){0===c&&$(".brand_title").removeClass("revealed"),c++,$(this).addClass("revealed"),$(".black").removeClass("black"),0===n&&$(".season").removeClass("active"),n++;var i=$(this).text().replace(",","").replace("and ","");$(".brandID").map(function(n,a){console.log(i+" matched "+$(a).text().toUpperCase()),i.toUpperCase()===$(a).text().toUpperCase()&&e($(a).next())})}),$(".season_image").click(function(){$(this).removeClass("active"),$(this).addClass("inactive");var e=$(this).closest(".seasons");e.find(".inactive").length===e.find(".season_image").length&&($(".brand_title").map(function(n,i){var a=e.prev().text().toUpperCase(),o=$(i).text().replace(",","").toUpperCase();console.log(a+" "+o),console.log(a===o),o===a&&($(i).removeClass("revealed"),e.find(".active").removeClass("active"))}),console.log(e.prev().text()),w.removeClass("showing"))}),$(".brandID").map(function(n,i){var a=$(".brandID")[$(".brandID").length-1-n];e($(a).next())})}),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&$(".season_image").css({"max-height":"none"})}(jQuery);