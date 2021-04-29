(function($){
  $.fn.animateOnScroll = function(options){
    var settings = $.extend({},{
      delay:
    },options);

    $(this).each(function(){
      var $el = $(this);
      $(window).scroll(function(){
        if($el.onView()){
          var delay = 0,
          data = $el.data('delay');
          if(data){
            delay = data;
          }
          setTimeout(function(){
            $el.addClass('animate');
          },delay);
        }
      });
    });

  }
})(jQuery);
