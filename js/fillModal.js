(function($){
  $.fn.fillModal = function(options){
    var settings = $.extend({},{
      parent: 'li',
      classes: [],
      modal: $(''),
      cb: false
    },options);

    $(this).each(function(){

      var $el = $(this);

      $el.click(function(){
        var parent = $(this).closest(settings.parent);

        for(var i = 0 ; i < settings.classes.length ; i++){
          var key = '.' + settings.classes[i],
          elContent = parent.find(key).html();
          settings.modal.find(key).html(elContent);
        }

        if(typeof settings.cb === 'function'){
          settings.cb();
        }

      });



    });

  }
})(jQuery);
