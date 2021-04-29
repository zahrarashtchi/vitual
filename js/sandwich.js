(function($){
  $.fn.sandwich = function(options){
    var settings = $.extend({},{
      menu: $(''),
      close: $(''),
      black: false,
      slideDown: false,
      closeOnClick : false
    },options);

  if(settings.black){
     $('body').append('<div class="black-cover"></div>');
     settings.black = $('.black-cover');
  }

  var el = $(this);
  if(settings.slideDown){
    el.click(function(){
      settings.menu.slideToggle();
    });
  }
  else{
    var elements = el.add(settings.close).add('.black-cover');

    if(settings.closeOnClick){
      settings.menu.activeClick({
        childs:'a'
      });
      elements= elements.add(settings.menu.find('a'));
    }

    elements.click(function(e){
      settings.menu
      .add(elements)
      .not('li a')
      .toggleClass('active');


      fadeBlack();
    });
  }

  function fadeBlack(){
    if(settings.black){
      settings.black.fadeToggle(300);
    }
  }
}
})(jQuery);
