!function($){function n(n){var a=n.find(".season"),t;o=window.innerWidth>480?e(window.innerWidth):i(window.innerWidth),v&&v.removeClass("showing");var s=n.find(".season_image").length;n.find(".season").addClass("active"),dx=-1,dy=1,n.find(".season_image").map(function(n,e){t=$(e)[0].className.indexOf("vert")>0,$(e).removeClass("inactive"),$(e).addClass("active"),$(e).css({"z-index":w,left:o.x+"px",top:(t?50+Math.abs(100*Math.random()):o.y)+"px"}),o.x+=dx*h,o.y+=dy*h,window.innerWidth>480&&(o.x+330>window.innerWidth||o.y+$(e).height()>window.innerHeight-67||o.x<0||o.y<0)&&(l++,dx=-1,dy=1,o.y<0&&(o.y=4),o.x<0&&(o.x=4)),window.innerWidth<480&&(o.y<0||o.x<0)&&(l++,dx=g[l%4][0],dy=g[l%4][1],o.x=18,o.y=20),w--,t&&window.innerWidth<480&&(o.y=Math.floor(100*Math.random())),n===s-1&&(v=$(e).parent().prev(),v.toggleClass("showing"))}),w+=40,d=-1*d,l++}function e(n){var e=.62*n;return window.innerWidth>959?(e=.56*n,rangeHeight=.25*window.innerHeight):window.innerWidth>809?(e=.4*n,rangeHeight=window.innerHeight-450):window.innerWidth>680?(e=.32*n,rangeHeight=.15*window.innerHeight):window.innerWidth>480&&(e=.3*n,rangeHeight=.08*window.innerHeight),rangeX=(.1+.9*Math.random())*e,rangeY=(.3+.7*Math.random())*rangeHeight,rangeY<0&&(rangeY=0),{x:rangeX,y:rangeY}}function i(n){return rangeX=.15*n,rangeY=window.innerHeight-270,rangeY>200&&(rangeY=window.innerHeight-400),{x:Math.random()*rangeX,y:Math.random()*rangeY}}function a(n){var e=1e3;return ret=0,f.map(function(i){Math.abs(n-i)<e&&(ret=i,e=Math.abs(n-i))}),ret}function t(n){$(n).append('<div class="squiggle"></div>');var e=19*Math.floor($(n).width()/19);e=a($(n).width()),$(n).find(".squiggle").width(e),$(n).find(".squiggle").css("margin-left",-(e-$(n).width)/2+"px")}var s,r,d;$(".season_image").map(function(n,e){var i=7*Math.random()-3.5});var o=window.innerWidth>480?e(window.innerWidth):i(window.innerWidth),h=window.innerWidth>480?5:2,w=100,g=[[1,1],[-1,1],[-1,-1],[1,-1]];s=1,r=-1,d=1;var l=0,v;window.innerWidth<480&&$(".season_image").css("max-width",window.innerWidth-20),$(".top-brand").addClass("revealed"),$(".season_image").mouseenter(function(){$(".showing").removeClass("showing"),$(this).parent().prev().addClass("showing"),$(this).parent().prev()!==v&&(v.removeClass("showing"),v=$(this).parent().prev(),v.addClass("showing")),window.innerWidth<480&&($(this).removeClass("active"),$(this).addClass("inactive"))}),$(".season_image").mouseleave(function(){$(".showing").removeClass("showing")});var c=function(){},m=0,f=isMob?[11,16,22,27,33,38,43,49,54,60,65,71,76,82,87,98,103,109,114]:[49,66,74,91,98,115,121,147,164,171,189,196,220,238,245];$(document).ready(function(){var e=0;$(".brand_title").click(function(){0===m&&$(".brand_title").removeClass("revealed"),m++,$(this).addClass("revealed"),t(this),$(".black").removeClass("black"),0===e&&$(".season").removeClass("active"),e++;var i=$(this).text().replace(",","").replace("and ","");" "===i[i.length-1]&&(i=i.substr(0,i.length-1)),$(".brandID").map(function(e,a){i.toUpperCase()===$(a).text().toUpperCase()&&n($(a).next())})}),$(".season_image").click(function(){$(this).removeClass("active"),$(this).addClass("inactive");var n=$(this).closest(".seasons");n.find(".inactive").length===n.find(".season_image").length&&($(".brand_title").map(function(e,i){var a=n.prev().text().toUpperCase(),t=$(i).text().replace(",","").toUpperCase();t===a&&($(i).removeClass("revealed"),n.find(".active").removeClass("active"))}),window.innerWidth<480&&$(v.closest(".brand").next().find(".season_attribution")[0]).addClass("showing"),v.removeClass("showing"))}),$(".brandID").map(function(e,i){var a=$(".brandID")[$(".brandID").length-1-e];n($(a).next())})}),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&$(".season_image").css({"max-height":"none"})}(jQuery);