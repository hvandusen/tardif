!function($){function n(n){var a=n.find(".season"),t;s=window.innerWidth>480?e(window.innerWidth):i(window.innerWidth),g&&g.removeClass("showing");var v=n.find(".season_image").length;n.find(".season").addClass("active"),dx=-1,dy=1,n.find(".season_image").map(function(n,e){t=$(e)[0].className.indexOf("vert")>0,$(e).removeClass("inactive"),$(e).addClass("active"),$(e).css({"z-index":d,left:s.x+"px",top:(t?50+Math.abs(100*Math.random()):s.y)+"px"}),s.x+=dx*o,s.y+=dy*o,window.innerWidth>480&&(s.x+330>window.innerWidth||s.y+$(e).height()>window.innerHeight-67||s.x<0||s.y<0)&&(w++,dx=-1,dy=1,s.y<0&&(s.y=4),s.x<0&&(s.x=4)),window.innerWidth<480&&(s.y<0||s.x<0)&&(w++,dx=h[w%4][0],dy=h[w%4][1],s.x=18,s.y=20),d--,t&&window.innerWidth<480&&(s.y=Math.floor(100*Math.random())),n===v-1&&(g=$(e).parent().prev(),g.toggleClass("showing"))}),d+=40,r=-1*r,w++}function e(n){var e=.62*n;return window.innerWidth>959?(e=.56*n,rangeHeight=.25*window.innerHeight):window.innerWidth>809?(e=.4*n,rangeHeight=window.innerHeight-450):window.innerWidth>680?(e=.32*n,rangeHeight=.15*window.innerHeight):window.innerWidth>480&&(e=.3*n,rangeHeight=.08*window.innerHeight),rangeX=(.1+.9*Math.random())*e,rangeY=(.3+.7*Math.random())*rangeHeight,rangeY<0&&(rangeY=0),{x:rangeX,y:rangeY}}function i(n){return rangeX=.15*n,rangeY=window.innerHeight-300,rangeY>200&&(rangeY=window.innerHeight-400),{x:Math.random()*rangeX,y:Math.random()*rangeY}}var a,t,r;$(".season_image").map(function(n,e){var i=7*Math.random()-3.5;$(e).css({transform:"rotate("+i+"deg)"})});var s=window.innerWidth>480?e(window.innerWidth):i(window.innerWidth),o=window.innerWidth>480?5:2,d=100,h=[[1,1],[-1,1],[-1,-1],[1,-1]];a=1,t=-1,r=1;var w=0,g;window.innerWidth<480&&$(".season_image").css("max-width",window.innerWidth-20),$(".top-brand").addClass("revealed"),$(".season_image").mouseenter(function(){$(".showing").removeClass("showing"),$(this).parent().prev().addClass("showing"),$(this).parent().prev()!==g&&(g.removeClass("showing"),g=$(this).parent().prev(),g.addClass("showing")),window.innerWidth<480&&($(this).removeClass("active"),$(this).addClass("inactive"))}),$(".season_image").mouseleave(function(){$(".showing").removeClass("showing")});var v=function(){},l=0;$(document).ready(function(){var e=0;$(".brand_title").click(function(){0===l&&$(".brand_title").removeClass("revealed"),l++,$(this).addClass("revealed"),$(".black").removeClass("black"),0===e&&$(".season").removeClass("active"),e++;var i=$(this).text().replace(",","").replace("and ","");$(".brandID").map(function(e,a){i.toUpperCase()===$(a).text().toUpperCase()&&n($(a).next())})}),$(".season_image").click(function(){$(this).removeClass("active"),$(this).addClass("inactive");var n=$(this).closest(".seasons");n.find(".inactive").length===n.find(".season_image").length&&($(".brand_title").map(function(e,i){var a=n.prev().text().toUpperCase(),t=$(i).text().replace(",","").toUpperCase();t===a&&($(i).removeClass("revealed"),n.find(".active").removeClass("active"))}),window.innerWidth<480&&$(g.closest(".brand").next().find(".season_attribution")[0]).addClass("showing"),g.removeClass("showing"))}),$(".brandID").map(function(e,i){var a=$(".brandID")[$(".brandID").length-1-e];n($(a).next())})}),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&$(".season_image").css({"max-height":"none"})}(jQuery);