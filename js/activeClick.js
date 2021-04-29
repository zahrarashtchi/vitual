(function($){
  $.fn.activeClick = function(options){
    var settings = $.extend({},{
      class: 'active',
      childs: ''
    },options);

  $(this).each(function(){
    var $el = $(this),
    childs = $el.find(settings.childs);

    childs.click(function(){
      childs.removeClass(settings.class);
      $(this).addClass(settings.class);
    });
    return $el;
  });
}
})(jQuery);
