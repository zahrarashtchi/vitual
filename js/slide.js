(function($){
  $.fn.slide = function(options){
    var settings = $.extend({},{
      duration: 400,
      oneOpen: false
    },options);

    $(this).each(function(){
      var el = $(this),
      headers = el.find('.header'),
      contents = el.find('.content');

      contents.click(function(e){
        e.stopPropagation();
      })
      .slideUp()
      .filter('.active').slideDown(settings.duration);

      headers.click(function(index){
        var prevH = headers.filter('.active'),
        currentH = $(this),
        currentC = $(contents.eq(headers.index(this))),
        same = prevH[0] == this;

        currentH.toggleClass('active')
        .find('.icon').toggleClass('active');

        currentC.slideToggle();

        if(settings.oneOpen && !same){
          var index = headers.index(prevH[0]);
          prevH.removeClass('active')
          .find('.icon').removeClass('active');
          contents.eq(index).slideUp();
        }
      });

    });
  }
})(jQuery);
