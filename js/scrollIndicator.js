(function($){
  $.fn.scrollIndicator = function(){
    var docHeight = $(document).height(),
        winHeight = $(window).height(),
        topBar = $(this);

    $(window).scroll(function(){
      var scrolled = $(window).scrollTop(),
          percent = scrolled/(docHeight-winHeight) * 100;
      topBar.css({
        width : percent + '%'
      });
    });
  }
})(jQuery);
