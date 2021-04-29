function barPercentage(onView,bar,delayTime,percentEl,duration){
  var done = 0;
  $(window).scroll(function(){
    if(!done){
      if(isOnView( onView, $(window).scrollTop() )){
        done=1;
        $(bar).each(function(index) {
            var delay = index * delayTime,
            bar = $(this),
            percent = bar.find(percentEl),
            barWidth = Number(bar.data('width'));
            setTimeout(function(){
              bar.animate({
                width : barWidth + '%'
              },
            {
              duration: duration,
              progress: function(promise,progress){
                var progAmount = Math.round(progress * 100);
                percent.text(progAmount + '%');
                if(progAmount > barWidth){
                  percent.text(barWidth + '%');
                }
              }
            });
            },delay);
        });
      }
    }
  });

}
