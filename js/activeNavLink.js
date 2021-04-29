(function($) {
  $.fn.activeNavLink=function(options){
    var settings = $.extend({},{
      lists: $(),
      additional:0
    },options);
    var anchors = settings.lists.find('a');
    $(this).each(function(index){
      var $el = $(this);
      $(window).scroll(function(){
        if($el.onView({
          additional: settings.additional
        })){
          var theAnchor = settings.lists
          .filter(':eq(' + (index) + ')')
          .find('a');
          anchors.removeClass('active');
          theAnchor.addClass('active');
        }
      });
    });
  }
})(jQuery);
