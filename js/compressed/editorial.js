!function($){function n(n){var e=n.find(".season"),a=n.find(".season_attribution");d&&d.removeClass("showing");var g=n.find(".season_image").length;n.find(".season").addClass("active"),dx=s[r%4][0],dy=s[r%4][1],n.find(".season_image").map(function(n,e){$(e).removeClass("inactive"),$(e).addClass("active"),$(e).css({"z-index":t,left:o.x+"px",top:o.y+"px"}),o.x+=8*dx,o.y+=8*dy,(o.x+330>window.innerWidth||o.y+330>window.innerHeight-67||o.x<0||o.y<150)&&(r++,dx=s[r%4][0],dy=s[r%4][1]),t--,n===g-1&&(d=$(e).parent().prev(),console.dir(d),d.toggleClass("showing"))}),t+=40,i=-1*i,r++,range=window.innerWidth-375,rangeHeight=window.innerHeight-750,rangeX=Math.random()*range,rangeY=Math.random()*rangeHeight,randX=1.5+3*Math.random(),randY=4+3*Math.random(),o={x:rangeX,y:rangeY},console.log(o.y)}var e,a,i,o={x:window.innerWidth/3,y:window.innerHeight/3},t=100,s=[[1,1],[-1,1],[-1,-1],[1,-1]];e=1,a=-1,i=1;var r=0,d;$(window).resize(function(){console.log(window.innerWidth)}),$(".brandID").map(function(e,a){console.log($(".brandID").length),rev=$(".brandID")[$(".brandID").length-1-e],n($(rev).next())}),$(".see_all_ads").click(function(){$(".brandID").map(function(e,a){n($(a).next())})}),$(".season_image").click(function(){remaining=$(".season_image.active"),console.dir(remaining.length),$(this).removeClass("active"),$(this).addClass("inactive"),1===remaining.length&&d.removeClass("showing")}),$(".season_image").mouseenter(function(){setTimeout(function(){$(this).delay(200).css({transform:"rotate(0deg)"})},200),$(this).parent().prev()!==d&&(d.removeClass("showing"),d=$(this).parent().prev(),d.addClass("showing")),console.log(d.index())}),$(".season_image").mouseleave(function(){}),$(document).ready(function(){$(".brand_title").click(function(){var e=$(this).text().replace(",","").replace("and ","");console.log(e),$(".brandID").map(function(a,i){e===$(i).text()&&n($(i).next())})})})}(jQuery);