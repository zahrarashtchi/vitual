(function(){
  $.fn.onView = function(options){

    var settings= $.extend({},{
      additional : 0
    },options);
    wH = $(window).height() ,
    $el = $(this) ,
    eT = $el.offset().top + settings.additional ,
    eH = $el.outerHeight() + settings.additional,
    wS = $(window).scrollTop();

    if( ( wS > (eT + eH - wH) )){
      return true;
    }
    return false;
  }
})(jQuery);
