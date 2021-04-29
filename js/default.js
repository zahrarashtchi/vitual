// default
$('i').attr('aria-hidden','true');
$(window).on('load',function(){
  $('.preloader').remove();
});

function doAt(width,cb){
  var bw = $('body').outerWidth();
  if(bw <= width){
    cb();
  }
}


function ballLoader(itemsName,duration,fTime,sTime){
  var items = $(itemsName);
  animateBalls(items,duration,fTime);
  var interval = setInterval(function(){
    animateBalls(items,duration,fTime);
  },sTime);
}

function animateBalls(items,duration,time){
  if(items.length == 0){
    clearInterval(interval);
  }
  items.each(function(index,el){
    $(el).css({
      'animation-name' : 'up',
      'animation-delay' : (index * duration) + 'ms'
    });
  });
  setTimeout(function(){
    items.each(function(index,el){
      $(el).css({
        'animation-name' : 'down',
        'animation-delay' : ((index+1) * duration) + 'ms'
      });
    });
  },time);
}


function activeClick(parentEl){
  var parent = $(parentEl),
  childs = parent.children();
  childs.click(function(){
    childs.removeClass('active');
    $(this).addClass('active');
  });
}


function fireSwipes(){
  var ul = $('.subs-list ul'),
  lists = ul.children(),
  listsH = lists.outerHeight() + parseInt(lists.css('margin-top')) + parseInt(lists.css('margin-bottom')),
  subsH = $('.subs-list').outerHeight(),
  overflow = lists.not('.in-view').length,
  i=0;

  $('.swipe').click(function(){
    var el = $(this),
    marginTop = Number(ul.css('margin-top').replace('px',''));

    if(el.hasClass('locked')){
      return;
    }

    el.addClass('locked');

    if(el.hasClass('swipe-up')){
      if(i != 0){
        --i;
        ul.css({
          'margin-top' : -i * listsH + 'px'
        });
      }
    }
    else if(el.hasClass('swipe-down')){
      if(i != overflow){
        i++;
        ul.css({
          'margin-top' : -i * listsH + 'px'
        });
      }
    }
    el.removeClass('locked');
  });
}

function thumbSizes(subs,main,swipeH,clickLi,resetMargin){
  if(!resetMargin){
    $('.subs-list ul').css('margin-top','0');
    $('.subs-list li').removeClass('in-view').removeClass('active');
  }
  if(!clickLi){
    activeClick('.subs-list ul');
    $('.subs-list li').click(function(){
      var src = $(this).find('img').attr('src');
      mainImg.find('img').attr('src', src);
    });
  }
  var swipes = $('.swipe'),
  swipeMargin = parseInt(swipes.css('margin-bottom')) + parseInt($(swipes[1]).css('margin-top')),
  subsList = $(subs),
  mainImg = $(main),
  li = subsList.find('li'),
  imgMargin = parseInt(li.css('margin-bottom')) + parseInt(li.css('margin-top'));

    var i,
    h,
    currentH,
    equal=false,
    mainImgH = mainImg.outerHeight(),
    remainedH = mainImgH - ((swipeH * 2) + swipeMargin),
    subImages= subsList.find('img'),
    subImgH = subImages.height() + imgMargin,
    less=false;

    for (i = 1; i <= subImages.length; i++){
      currentH = subImgH * i;
      if(currentH === remainedH){
        equal = true;
        break;
      }
      if(currentH > remainedH){
        break;
      }
    }
    //is not equal , either less or greater
    if(!equal){
      --i;
      //less than, loop ended till end because it was not equal or greater
      if(i === subImages.length){
        swipes.hide();
        less = true;
        subsList.parents('.sub-images').css('justify-content','center');
      }
      //greater than
      else{
        swipes.css({
          height: swipeH + ((remainedH - (i * subImgH))/2)  + 'px',
          'display': 'block'
        });
        li.each(function(index){
          //adding class ended
          if(index === i){
            return;
          }
          if(index < i){
            $(this).addClass('in-view');
          }
        });

        $('.swipe').off('click');
        fireSwipes();
        subsList.parents('.sub-images').css('justify-content','normal');
      }
    }

  subsList.css({
      height:  subImgH * i + 'px',
  });
  setTimeout(function() {
    $('.sub-images').css('opacity','1');
  },10);
  return less;
}

function fadeButton(buttsParent, cntentsParent){
  var buttonsParent = $(buttsParent),
  buttons = buttonsParent.children(),
  contents = $(cntentsParent).children();

  buttons.click(function(){
    buttons.removeClass('active');
    $(this).addClass('active'),
    index = buttons.index(this),
    activeContent = contents.filter('.active'),
    newContent = contents.filter(':eq(' + index + ')');

    if(activeContent[0] != newContent[0]){
      activeContent.removeClass('active').fadeOut(300);
      newContent.addClass('active').fadeIn(300);
    }
  });
}

function radioes(){
  var radioes = $('.custom-radio-label');
  $('input[type="radio"]').filter(':checked').parent().find('.custom-radio-label').addClass('checked');
  radioes.click(function(){
    var el = $(this),
    parent = el.parents('.radio-parent'),
    checked = parent.find('input.checked');
    if(checked[0] != this){
      parent.find('.custom-radio-label').removeClass('checked');
      el.addClass('checked');
    }
  });
}

function ajaxForm(formEl,registerTimeout){
  var form = $(formEl);
  form.submit(function(e){
    e.preventDefault();
    var formData = $(this).serialize(),
    form = $(this);
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: formData
    })
    .done(function(response){
      form.find('.message').html(response).fadeIn(300);
      var timeout=0;
      if(form.hasClass('register')){
        timeout = registerTimeout;
      }
      setTimeout(function(){
        location='/';
      },timeout);
    })
    .fail(function(data){
      form.find('.message').html(data.responseText).fadeIn(300);
    });
  });
}

function separatePrice(price){
  var length = price.length;
  while (length > 3) {
    var index = length - 3;
    price = price.substr(0,index) + ',' + price.substr(index);
    length= index;
  }
  return price;
}

function setOwlNav(){
  $('.owl-prev').html('<i class="fa fa-angle-left"></i>');
  $('.owl-next').html('<i class="fa fa-angle-right"></i>');
}

function setCustomSelect(){
  var selects= $('.customSelect'),
  len = selects.length,
  select ,
  options,
  dropdown ,
  selectButton;

  for (var i = 0; i < len ; i++) {
    var current = $(selects[i]);
    select = current.find('select');
    options = select.children();
    current.append('<div class="select-selected">' + options.filter(':selected').html() + '</div>');
    current.append('<div class="select-items"></div>');
    dropdown = current.find('.select-items');
    selectButton = current.find('.select-selected');

    for (var j = 0; j < options.length; j++) {
      dropdown.append('<div>' + $(options[j]).html() + '</div>');
      }

      selectButton.click(function(){
        $(this).parent().find('.select-items').toggleClass('select-show');
      });
    }

    $('.select-items > div').click(function(){
      var el = $(this),
      index = el.index(),
      parent = el.parents('.customSelect'),
      select = parent.find('select'),
      options = select.children(),
      dropdown = parent.find('.select-items'),
      selectButton = parent.find('.select-selected');

      if( select.filter(':selected').html() !== el.html() ){
        options.removeAttr('selected');
        $(options[index]).attr('selected','selected');
        dropdown.children().removeClass('selected');
        el.addClass('selected');
        selectButton.html(el.html());
      }
      });


   $(document).click(function(e){
    var target = $(e.target);
    if( !target.hasClass('select-selected') ){
      selects.find('.select-items').removeClass('select-show');
    }
  });
}

 function selectStars(star,active){
   var stars = $(star),
   parent = stars.parents('ul'),
   lists = parent.find('li');

   stars.click(function(){
     var el = $(this),
     index = el.parent().index(),
     nextActive = false;
     for (var i = index+1; i < lists.length; i++) {
       if(lists.filter(':eq(' + i + ')').find('i').hasClass(active)){
         nextActive = true;
         lists.filter(':eq(' + i + ')').find('i').removeClass(active);
       }
     }
     if(!nextActive){
       if(el.hasClass(active)){
         for (var i = index; i >= 0 ; i--) {
           lists.filter(':eq(' + i + ')').find('i').removeClass(active);
         }
       }
       else{
         for (var i = index; i >= 0 ; i--) {
          lists.filter(':eq(' + i + ')').find('i').addClass(active);
         }
       }
     }

   });
 }
 function hexToRGB(hex, alpha) {
     var r = parseInt(hex.slice(1, 3), 16),
         g = parseInt(hex.slice(3, 5), 16),
         b = parseInt(hex.slice(5, 7), 16);

     if (alpha) {
         return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
     } else {
         return "rgb(" + r + ", " + g + ", " + b + ")";
     }
 }
