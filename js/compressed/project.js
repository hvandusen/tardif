!function($){function e(e){var t=e.wheelDelta?e.wheelDelta:-e.detail}window.addEventListener("mousewheel",e),window.addEventListener("DOMMouseScroll",e),$(document).ready(function(){$(".top-bar.magazines a.link").click(function(){}),$(".bottom-bar .title").click(function(){window.location="/#"});var e="Pierre Tardif is a New York-based art director and graphic designer. ";setInterval(function(){e+=e.substr(0,1),e=e.substr(1,e.length-1),console.log(e),$("title").text(e)},300)})}(jQuery);