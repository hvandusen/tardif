!function($){var o;$(document).ready(function(){var s=0,a=0,n=3,c=3;gyro.frequency=5,console.log(gyro.hasFeature("devicemotion")),gyro.startTracking(function(r){0==s&&(o=r),c=Math.floor(3.5+r.x/5*3.5),7>c&&c>=0&&c!=n&&(classes=$(e)[a].classList,$($(e)[a]).addClass("-position-"+c+"-of-7"),$($(e)[a]).removeClass(classes[1]),n=c,$(".book").map(function(o,e){console.log($(e))})),s++})})}(jQuery);