!function($){function n(n){var a=n.find(".season"),t=n.find(".season_attribution");c&&c.removeClass("showing");var h=n.find(".season_image").length;n.find(".season").addClass("active"),dx=g[l%4][0],dy=g[l%4][1],n.find(".season_image").map(function(n,e){$(e).removeClass("inactive"),$(e).addClass("active"),$(e).css({"z-index":s,left:o.x+"px",top:o.y+"px"}),o.x+=dx*d,o.y+=dy*d,(o.x+330>window.innerWidth||o.y+$(e).width()>window.innerHeight-67||o.x<0||o.y<250)&&(l++,dx=g[l%4][0],dy=g[l%4][1]),window.innerWidth<480&&(o.y>30||o.x>20)&&(l++,dx=g[l%4][0],dy=g[l%4][1],o.x=18,o.y=20),s--,n===h-1&&(c=$(e).parent().prev(),console.dir($(e)),c.toggleClass("showing"))}),s+=40,r=-1*r,l++,o=window.innerWidth>480?e(window.innerWidth):i(window.innerWidth)}function e(n){return range=n-375,n>750?rangeHeight=n-750:rangeHeight=100,rangeX=Math.random()*range,rangeY=Math.random()*rangeHeight,randX=1.5+3*Math.random(),randY=4+3*Math.random(),rangeY<0&&(rangeY=0),{x:rangeX,y:rangeY}}function i(n){return rangeX=20,rangeY=.04*window.innerHeight,{x:Math.random()*rangeX,y:.01*window.innerHeight+32+Math.random()*rangeY}}var a,t,r;$(".brand_title").click(function(){$(".brand_title").removeClass("revealed"),$(this).addClass("revealed")});var o={x:window.innerWidth/3,y:window.innerHeight/3};window.innerWidth<480&&(o={x:0,y:0});var d=window.innerWidth>480?8:2,s=100,g=[[1,1],[-1,1],[-1,-1],[1,-1]];a=1,t=-1,r=1;var l=0,c;window.innerWidth<480&&$(".season_image").css("max-width",window.innerWidth-20),$(window).resize(function(){console.log(window.innerWidth)}),$(".brandID").map(function(e,i){console.log($(".brandID").length),rev=$(".brandID")[$(".brandID").length-1-e],n($(rev).next())}),$(".see_all_ads").click(function(){$(".brandID").map(function(e,i){n($(i).next())})}),$(".season_image").click(function(){remaining=$(".season_image.active"),console.dir(remaining.length),$(this).removeClass("active"),$(this).addClass("inactive"),1===remaining.length&&c.removeClass("showing")}),$(".season_image").mouseenter(function(){setTimeout(function(){$(this).delay(200).css({transform:"rotate(0deg)"})},200),$(this).parent().prev()!==c&&(c.removeClass("showing"),c=$(this).parent().prev(),c.addClass("showing")),console.log(c.index())}),$(".season_image").mouseleave(function(){}),$(document).ready(function(){$(".brand_title").click(function(){var e=$(this).text().replace(",","").replace("and ","");console.log(e),$(".brandID").map(function(i,a){e===$(a).text()&&n($(a).next())})})})}(jQuery);