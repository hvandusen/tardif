<script type="text/javascript" language="javascript">
$(function(){
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
    console.log(url)
    if(url === 'magazines' || url === 'advertisements'){
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
      cache[ url ] = $( '<div class="bbq-item"/>' )

        // Append the content container to the parent container.
        .appendTo( '.bbq-content' )

        // Load external content via AJAX. Note that in order to keep this
        // example streamlined, only the content in .infobox is shown. You'll
        // want to change this based on your needs.
        .load( url, function(){
          // Content loaded, hide "loading" content.
          $( '.bbq-loading' ).hide();
        });
    }
  });

  // Since the event is only triggered when the hash changes, we need to trigger
  // the event now, to handle the hash the page may have loaded with.
  $(window).trigger( 'hashchange' );
  $('.nav').click(function(){
    $('.current-page').removeClass('current-page');
    $(this).addClass('current-page');
  })
});



</script>
