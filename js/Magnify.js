(function($){
  $.fn.magnify = function(options){
    var settings = $.extend({
      zoom:2
    },options);

  this.each(function(){
    var el = this ,
        $el = $(this),
        $glass;
    $el.before("<div class='img-magnifier-glass'></div>");
    $glass = $el.parent().find(".img-magnifier-glass");

    $el.on('mousemove',move)
    .on('touchmove',move);

    $glass.on('mousemove',move)
    .on('touchmove',move)
    .on('mouseleave',function(){
      $glass.css('opacity','0');
    });

    function move(e){
      moveMagnifier(e,$el,$glass);
    }

  });

  function moveMagnifier(e,$el,$glass){
    $glass.css('opacity','1');
    var pos = getCursorPos(e,$el),
    x = pos.x,
    y=pos.y,
    glassW = $glass.outerWidth(),
    glassH = $glass.outerHeight(),
    h = glassH/2,
    w = glassW/2,
    img = $el.find('img'),
    imgW = img.width(),
    imgH = img.height();

    if (x > imgW - (w/settings.zoom)) {
      x = imgW - (w/settings.zoom) ;
    }
    if (x < w/(settings.zoom) ) {
      x = w/(settings.zoom);
    }
    if (y > imgH - (h/settings.zoom)) {
      y = imgH - (h/settings.zoom);
    }
    if (y < (h/settings.zoom)) {
      y = (h/settings.zoom);
    }
    $glass.css({
      top: y - h  + 'px',
      left: x - w + 'px',
      'background-image': 'url(' + img.attr('src') + ')',
      'background-size': (imgW * settings.zoom) + 'px '+ (imgH * settings.zoom) + 'px',
      'background-position': '-' + (x * settings.zoom - w) + 'px -' + (y * settings.zoom - h) + 'px'
    });
  }

  function getCursorPos(e,$el){
    var x,y;
    x = e.pageX - $el.offset().left;
    y = e.pageY - $el.offset().top;
    return {
      x: x,
      y: y
    };
  }
}
})(jQuery);
