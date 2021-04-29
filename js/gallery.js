
  function positionItems(items , gallery , transform='' , transition="all 0.5s ease-out"){
    var totalWidth = 0 ,
    rows = 0 ,
    positionIndex = 0 ,
    height = items.outerHeight() ,
    width = items.outerWidth() ,
    galleryWidth = gallery.outerWidth();

    //positioning filter items
    for(var i=0 ; i < items.length ; i++){
      //making jquery object
      var element = $(items[i]) ,
      index = i ,
      x ,
      y = 0 ,
      transitionDelay = i * 25 ;

      // 1 row completed
      if(totalWidth == galleryWidth){
        rows++;
        //empty totalWidth for checking the next row
        totalWidth = 0;
        positionIndex = 0;
      }
      //checks if we should use position index if it is not first row
      if(rows>0){
        index = positionIndex++;
      }
      //setting x and y position of the element
      y = height * rows;
      x = index * width ;

      element.css({
        transform: "translate(" + x + "px ," + y +"px ) " + transform ,
        transition: transition + " " + transitionDelay + "ms" ,
        opacity:"1"
      });

      totalWidth += width;
    }

    //setting gallery height according to rows because items are absolutely positioned and have not a height
    //when a row is completed sure another row would be created but if it has not reached to the end we dont add rows
    // so we use row+1
    gallery.css({
      height : height * (rows+1) + "px"
    });
  }

  function fireGallery(items, buttons, gallery, filteredOut, transform, transition){
    positionItems(items, gallery, transform, transition);
    buttons.click(function(){
      var element = $(this) ,
      remain = element.data("filter") ,
      removed=[];

      items.removeClass(filteredOut);
      buttons.removeClass("active");
      element.addClass("active");

      if( remain != "all"){
        items.filter(function(index){
          if(!remain.includes(index)){
            removed.push(this);
          }
        });

        $(removed).addClass(filteredOut);

        $("."+filteredOut).css({
          transform: "translate(0%,0%) scale(0.5)" ,
          opacity:"0"
        });
      }
      positionItems(items.not("." + filteredOut),gallery,transform,transition);
    });

    //resizing window
    $(window).resize(function(){
      positionItems(items.not("."+filteredOut),gallery,transform,transition);
    });
  }
