!function($){var o;$(document).ready(function(){var s=0,e=0,n=3,a=3;gyro.frequency=5,console.log(gyro.hasFeature("devicemotion")),gyro.startTracking(function(e){0==s&&(o=e),a=Math.floor(3.5+e.x/5*3.5),7>a&&a>=0&&a!=n&&$(".book").map(function(o,s){if($(s).visible()){var e=$($(s).find(".book_image"));console.log("found this"),console.dir(e),classes=e.prop("classList"),e.addClass("-position-"+a+"-of-7"),e.removeClass(classes[1])}}),s++})})}(jQuery);