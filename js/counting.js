(function($){
  $.fn.counting = function(){
    var settings = $.extend({},{

    },options);

    $(this).each(function(){
      var $el = $(this),
      buttons = $el.find('.count-up , .count-down'),
      input = $el.find('.counting');

      input.attr('tabindex','-1')
      .focus(function(e){
        e.preventDefault();
        e.target.blur();
      });

      buttons.click(function(){
        var el = $(this),
        input = el.parents('.countingContainer').find('.counting');
        value = Number(input.attr('value'));
        if(el.hasClass('count-up')){
          input.attr('value',value + 1);
        }
        else{ //count down
          if(value != 1){
            input.attr('value',value - 1);
          }
        }
      });

    });
  }
})(jQuery);
