<script type="text/javascript" language="javascript">
$(function(){
  var barLoaded = false;
  // Keep a mapping of url-to-container for caching purposes.
  var cache = {
    // If url is '' (no fragment), display this div's content.
    '': $('.bbq-default')
  };

  // Bind an event to window.onhashchange that, when the history state changes,
  // gets the url from the hash and displays either our cached content or fetches
  // new content to be displayed.
  $(window).bind( 'hashchange', function(e) {
    console.log(e.fragment);
    //if it's a magazine page(or the home page..)
    if((e.fragment.indexOf('magazine')>-1 || e.fragment === '') && window.location.pathname.indexOf('about')===-1){
      $($('.link')[0]).addClass('current-page');
      $('.top-bar').css('position','relative');
    }
    else if(e.fragment.indexOf('books')>-1){
      $($('.link')[1]).addClass('current-page');
      $('.top-bar').css('position','fixed');

      console.log('fix it!!!')
    }
    else{ //if(e.fragment.indexOf('book-')>-1){
      //$($('.link')[2]).addClass('current-page');
      $('.top-bar').css('position','relative');
    }
    //else it's the about page

    // Get the hash (fragment) as a string, with any leading # removed. Note that
    // in jQuery 1.4, you should use e.fragment instead of $.param.fragment().
    var url = $.param.fragment();
    if(url==='about'){
      return;
    }
    //if(url.indexOf('#')<0)
      //window.location = '#'+url;
      if(url === 'advertising' || url === 'books' || window.location.pathname.indexOf('about')>-1   )
        $('.bottom-bar').css('border-bottom','none');
      else {
        $('.bottom-bar').css('border-bottom','solid black 4px');
      }
    if(barLoaded && !(url === 'magazines' || url === 'advertising')){
        $('.top-bar.magazines').css('animation','none');
      //$('.top-bar.magazines').remove();
    }
    if((url.indexOf('magazine-')>-1) && window.innerWidth>480 || document.location.hash === ''){
      $('.bottom-bar').css({
        'animation':'bottom-up .5s ease-in',
        'bottom':'64px',
        'z-index': 2000,
        'position': 'absolute'
      })
    }
    else if(document.location.hash === '#books' || document.location.pathname === '/about/'){
      $('.bottom-bar').css({
        'position':'fixed',
        'animation':'none',
        'bottom': '0px'
      });
  }else {
      $('.bottom-bar').css({
        //'position':'absolute',
        'animation':'none',
        'bottom': '0px'
      });
    }
    if(document.location.toString().indexOf('about')>-1){
      if(window.innerWidth<480)
      $('.bottom-bar').css({
        'bottom':'-80px',
        'animation':'',
        'display':'none',
        'position': 'fixed'
      });
      else {
        $('.bottom-bar').css({
          'bottom':'0px',
          'animation':''
        });
      }
  }

    if(false)
    if(url.indexOf('magazine-')>-1 || url === 'advertising'){
      $('header .top-bar').removeClass('moveDown');
    	$('header .top-bar').addClass('moveUp');
    }
    else {
      $('header .top-bar').removeClass('moveUp');
      $('header .top-bar').addClass('moveDown');
    }

    // Remove .bbq-current class from any previously "current" link(s).

    // Hide any visible ajax content.
      $( '.bbq-current' ).removeClass( 'bbq-current' );
      $( '.bbq-content' ).children( ':visible' ).hide();


    // Add .bbq-current class to "current" nav link(s), only if url isn't empty.
    url && $( 'a[href="#' + url + '"]' ).addClass( 'bbq-current' );

    if ( cache[ url ] ) {
      // Since the element is already in the cache, it doesn't need to be
      // created, so instead of creating it again, let's just show it!
      cache[ url ].show();

    } else {
      // Show "loading" content while AJAX content loads.
      $( '.bbq-loading' ).show();
      // Create container for this url's content and store a reference to it in
      // the cache.
      $('.mag-clean').map(function(i,e){
      //  if($(e)[0].hasOwnProperty('attributes') && $(e)[0].attributes[0].hasOwnProperty('nodeValue')){
          urlVal = $(e)[0].attributes[0].nodeValue;
          delete cache[urlVal];
        //}
        //if($(e).hasOwnProperty('attributes') && $(e).attributes.hasOwnProperty('urlid'))
        $(e).remove();
    })
    magClass ='';
    if(url.indexOf('magazine-')>-1 || url === '')
      magClass =' mag-clean';
      cache[ url ] = $( '<div urlID="'+url+'" class="bbq-item'+ magClass +'"/>' )
        // Append the content container to the parent container.
        .appendTo( '.bbq-content' )

        // Load external content via AJAX. Note that in order to keep this
        // example streamlined, only the content in .infobox is shown. You'll
        // want to change this based on your needs.
        .load( url.replace('-','/'), function(){
          // Content loaded, hide "loading" content.
          $( '.bbq-loading' ).hide();
          /*newBottomBar = $(cache[ url ]).find('.top-bar.magazines');
          if(newBottomBar.length>0){
            barVisible = true;
            //$(newBottomBar).appendTo('.top-bar');
          }*/
        });
        //applySquiggle('.current-page');
        //applySquiggle('.current');
    }
    if(window.sessionStorage.books && document.location.href.indexOf('book-')<0){
      console.log('there is a stored books position')
      window.scrollTo(0,parseInt(window.sessionStorage.books));
    }
    if(window.location.pathname.indexOf('about')>-1)
      $('.bottom-bar').css('position','fixed');
  });

  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.
  $(window).trigger( 'hashchange' );
  $(".top-bar").addClass('showAnd');
  //nono!
  //$('.top-bar .link.nav').addClass('current-page');
  $('.moveUp .nav').click(function(){
  //  if($('#map').length>0)
  //    $('#map').remove()
    $(".top-bar").removeClass('showAnd');
    $('.current-page').removeClass('current-page');
    $('.actual').removeClass('actual');
    $('.moveUp .squiggle').remove();
    $(this).addClass('current-page');
    $(this).addClass('actual');
    console.log('this is current');
    applySquiggle(this);
    $('.envelope').hide();
  });

  //applySquiggle('.current-page');
  //applySquiggle('.current');
  squig('.current-page');
  squig('.current');

  //var squigWidths = [49,66,74,91,98,115,121,147,164,171,189,196,220,238,245];
  var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
	var is_safari = navigator.userAgent.indexOf("Safari") > -1;
	if ((is_chrome)&&(is_safari)) {is_safari=false;}
var squigWidths;
if(is_safari)
	squigWidths = isMob ? [11,16,22,33,38,43,49,54,60,65,71,76,98,103,109,111] :[49,66,74,91,98,116,147,164,171,189,196,213,238,245];
else {
	$('.page-id-365 .title span').addClass('notSafari');
	squigWidths = isMob ? [11,16,22,33,38,43,49,54,60,65,71,76,98,103,109,111] :[49,66,74,91,98,116,132,164,186,196,213,233,245];
}
  function getClosest(width){
  	var closest = 1000;
  	ret = 0;
  	squigWidths.map(function(e){
  		if(Math.abs(width-e)<closest){
  			ret = e;
  			closest = Math.abs(width-e);
  		}
  	});
  	return ret;
  }

  function applySquiggle(el){
    console.log('from ajax')
    $(el).append('<div class="squiggle"></div>');
    var squigWidth = Math.floor($(el).width()/19)*19+(el === '.current' && window.innerWidth<480 ? 16 : 0);
    squigWidth = getClosest($(el).width())
    $(el).find('.squiggle').width(squigWidth);
    $(el).find('.squiggle').css('margin-left',-(squigWidth-$(el).width)/2+'px');
  }

  $('.title').click(function(){
    $('.envelope').show();
    //$('.top-bar .link.nav').addClass('current-page');
    //$(".top-bar").addClass('showAnd');
  })
});
</script>
