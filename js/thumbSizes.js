(function($){
  $.fn.thumbSizes = function(){
    var settings = $.extend({},{
      subs:,
      mainImg: ,
      swipeH: ,
    },options);



    function fireSwipes(subUl,swipes){
      //var ul = $('.subs-list ul'),
      lists = subUl.children(),
      listsH = lists.margin({
        full: true
      }),
      subsH = subUl.outerHeight(),
      overflow = lists.not('.in-view').length,
      i=0;

      /*$('.swipe')*/
      swipes.click(function(){
        var $el = $(this);

        if(el.hasClass('swipe-up')){
          if(i != 0){
            --i;
            ul.css({
              'margin-top' : -i * listsH + 'px'
            });
          }
        }
        else if(el.hasClass('swipe-down')){
          if(i != overflow){
            i++;
            ul.css({
              'margin-top' : -i * listsH + 'px'
            });
          }
        }

      });
    }



  }
})(jQuery);
