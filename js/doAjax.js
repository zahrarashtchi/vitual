(function($){
  $.fn.doAjax = function(options){
    var settings = $.extend({},{
      type: 'GET',
      successF: function(){},
      failF: function(){},
      parent: $(this).parent(),
      getJSON: false,
      setJSON: false,
      cb: false
    },options);

    $(this).each(function(){
      var el = $(this),
      myUrl,
      evnt;

      if(this.nodeName == 'FORM'){
        myUrl = el.attr('action');
        evnt='submit';
      }
      else{
        myUrl = el.attr('href');
        evnt='click';
      }
      el.on(evnt,function(e){
        e.preventDefault();
        $.ajax({
          type: settings.type,
          url: myUrl,
          data: el.serialize()
        })
        .done(function(response){
          if(settings.getJSON){
            var obj = JSON.parse(response);
          }
          if(settings.setJSON){
            settings.successF.call(el[0],response,obj,settings);
            for (var key in obj) {
              if(key != 'image'){
                settings.parent.find('.' + key).html(obj[key]);
              }
           }
          }
          else{
            settings.successF.call(el[0],response,settings);
          }
          if(typeof (settings.cb) == 'function'){
            settings.cb.call(el[0]);
          }
        })
        .fail(function(data){
          settings.failF.call(el[0],data,settings);
          if(typeof (settings.cb) == 'function'){
            settings.cb.call(el[0]);
          }
        });
      });

    });
  }
})(jQuery);
