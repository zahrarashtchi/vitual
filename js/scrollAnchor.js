(function($){
  $.fn.scrollAnchor=function(options){
    var settings = $.extend({},{
      duration: 400,
      additional : 0,
      delay:0
    },options);

    $(this).each(function(){
      var $el = $(this);
      $el.click(function(){
        console.log('click');
        var hashtag = $(this).data('href');
        console.log(hashtag);
        setTimeout(function(){
          $('html,body').animate({
            scrollTop: $(hashtag).offset().top + settings.additional
          },settings.duration,'linear');
        },settings.delay);
      });
    });
  };
})(jQuery);
