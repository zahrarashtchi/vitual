(function($){
  $.fn.childHover = function(options){
    var settings = $.extend({},{
      child : 'ul',
      icon: $('')
    },options);

    $(this).each(function(){
      var $el = $(this),
      $child = $el.find(settings.child);
      $child.add($el)
      .on('mouseover',function(){
        $el.children('a')
        .add(settings.icon)
        .add($child)
        .addClass('active');
      })
      .on('mouseleave',function(){
        $el.children('a')
        .add(settings.icon)
        .add($child)
        .removeClass('active');
      });
    });
  }
})(jQuery);
