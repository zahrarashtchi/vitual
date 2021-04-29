(function($){
  $.fn.swipes = function(){
    var settings = $.extend({},{
      height: 0 ,
      element: $(''),
      overflow: 0
    },options);

    $(this).each(function(){
      var $el = $(this),
      i=0;

      $el.click(function(){
        var currentSwipe = $(this);

        if(currentSwipe.hasClass('swipe-up')){
          if(i != 0){
            --i;
            settings.element.css({
              'margin-top' : -i * settings.height + 'px'
            });
          }
        }
        else if(el.hasClass('swipe-down')){
          if(i != settings.overflow){
            i++;
            settings.element.css({
              'margin-top' : -i * settings.height + 'px'
            });
          }
        }
      });
    });
  }
})(jQuery);
