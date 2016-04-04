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


    // Get the hash (fragment) as a string, with any leading # removed. Note that
    // in jQuery 1.4, you should use e.fragment instead of $.param.fragment().
    var url = $.param.fragment();
    if(barLoaded && !(url === 'magazines' || url === 'advertisements')){
        $('.top-bar.magazines').css('animation','none');
      //$('.top-bar.magazines').remove();
    }

    if(url.indexOf('magazine-')>-1 && window.innerWidth>480){
      $('.bottom-bar').css({
        'animation':'bottom-up .5s ease-in',
        'bottom':'64px',
        'z-index': 2000
      })
    }else {
      $('.bottom-bar').css({
        'animation':'none',
        'bottom': '0px'
      });
    }

    if(url.indexOf('magazine-')>-1 || url === 'advertisements'){
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
      console.log($('.bbq-item').length)
      $('.mag-clean').map(function(i,e){
        console.log('here is the object')
        console.dir($(e)[0].attributes[0].nodeValue)
      //  if($(e)[0].hasOwnProperty('attributes') && $(e)[0].attributes[0].hasOwnProperty('nodeValue')){
          urlVal = $(e)[0].attributes[0].nodeValue;
          console.log(cache[urlVal])
          delete cache[urlVal];
          console.log(cache);
        //}
        //if($(e).hasOwnProperty('attributes') && $(e).attributes.hasOwnProperty('urlid'))
        $(e).remove();
    })
    magClass ='';
    if(url.indexOf('magazine-')>-1)
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
    }
  });

  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.
  $(window).trigger( 'hashchange' );
  $(".top-bar").addClass('showAnd');
  $('.top-bar .link.nav').addClass('current-page');
  $('.nav').click(function(){
    $(".top-bar").removeClass('showAnd');
    $('.current-page').removeClass('current-page');
    $(this).addClass('current-page');

  })
  $('.title').click(function(){
    $('.top-bar .link.nav').addClass('current-page');
    $(".top-bar").addClass('showAnd');
  })
});
</script>
