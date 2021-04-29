(function($){
  $.fn.stickeyHeader = function(options){
    var settings = $.extend({},{
      class: 'fixed',
      customNum : false
    },options);

    var $el = $(this),
    top;

    if(settings.customNum){
      top = settings.customNum;
    }
    else{
      top = $el.offset().top;
    }

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll >= top){
        $el.addClass(settings.class);
      }
      else{
        $el.removeClass(settings.class);
      }
    });

  }
})(jQuery);
