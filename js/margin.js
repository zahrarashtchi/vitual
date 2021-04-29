(function($){
  $.fn.margin = function(){
    var settings = $.extend({},{
      top: false,
      bottom:false,
      both: false,
      full:false
    },options);

    var $el = $(this);
    topM = parseInt($el.css('margin-top'));
    if(settings.top){
      return topM;
    }
    bottomM = parseInt($el.css('margin-bottom'));
    if(settings.bottom){
      return bottomM;
    }
    if(settings.both){
      return topM + bottomM;
    }
    if(settings.full){
      return $el.outerHeight() + topM + bottomM;
    }

  }
})(jQuery);
