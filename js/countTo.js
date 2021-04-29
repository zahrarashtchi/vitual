
$.fn.countTo = function(options){
  options = options || {};

  $(this).each(function(){
    var settings = $.extend({} , $.fn.countTo.default , {
      from:            $(this).data('from'),
      to:              $(this).data('to'),
      speed:           $(this).data('speed'),
      refreshInterval: $(this).data('refreshInterval'),
      decimals:        $(this).data('decimals')
    } , options );

    var loops = Math.ceil(settings.speed / settings.refreshInterval),
    increment = (settings.to - settings.from) / loops;

    var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};


    if(data.countTo){
      //this function or another has set interval for that before
      clearInterval(data.countTo);
    }

    data.interval = setInterval(update , settings.speed);
    $self.data('countTo',data);

    render(value);

    function update(){
      value += increment;
      loopCount++;

      render(value);

      if(typeof(settings.onUpdate) == 'function'){
        settings.onUpdate.call(self,value);
      }

      if(loopCount >= loops){
        clearInterval(data.interval);
        $self.removeData('countTo');
        value = settings.to;

        if(typeof(settings.onComplete) == 'function'){
          settings.onComplete.call(self,value);
        }
      }
    }

    function render(value){
      var formatted = settings.formatter(value,settings);
      $self.html(value);
    }
  });
}

$.fn.countTo.default = {
  from: 0,
  to: 0,
  speed: 1000,
  refreshInterval : 10,
  decimals: 0,
  formatter: formatter,
  onUpdate: null,
  onComplete: null
}

function formatter(value , settings){
  return value.toFixed(settings.decimals);
}
