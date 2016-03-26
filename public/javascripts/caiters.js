(function(){
  // Desktop/Tablet only: add class to body when you are no longer at the top of the page, so we can slide over the name in the nav.
  var scrollTop;
  $(document).scroll(function(e){
    scrollTop = $(window).scrollTop();
    if ( scrollTop > 0) {
      $('body').addClass('is-scrolled');
    } else {
      $('body').removeClass('is-scrolled');
    }
  });
})();
