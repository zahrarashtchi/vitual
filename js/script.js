      $('#slider').show().revolution({
         delay:9000,
         autoHeight:"off",
         sliderLayout: 'fullwidth',
         sliderType:'standard',
         speed:'400',
         responsiveLevels:[1200,992,768,576],
   			visibilityLevels:[1200,992,768,576],
   			gridwidth:[1240,1024,778,480],
   			gridheight:[1000,600,650,600],
   			parallax: {
   				type:"mouse",
   				origo:"slidercenter",
   				speed:400,
   				speedbg:0,
   				speedls:0,
   				levels:[1,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
   				disable_onmobile:"on"
   			}
      });

      //Sandwich
      $('.sandwich-container').sandwich({
        menu: $('.menu-container'),
        closeOnClick: true
      });


      $('.has-children').childHover({
        icon: $('.mobile-icon')
      });

      //team carousel
      $('#team-carousel').owlCarousel({
        margin:5,
        nav:false,
        dots:false,
        loop: true,
        responsiveClass:true,
        responsive:{
          0: {
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:3
          }

        }
      });

      //parallax
      $('.s-parallax').parallax('50%',0.01);

      //portfoli-owlCarousel
      $('#portfolio-carousel').owlCarousel({
        loop:true,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
          0:{
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:3
          },
          1200:{
            items:4
          }
        }
      });

      $('#quote-image-carousel').owlCarousel({
        margin:60,
        loop:true,
        nav:false,
        dots:false,
        center:true,
        responsiveClass:true,
        responsive:{
          0:{
            items:1
          },
          992:{
            items:3
          }
        }
      });
      $('#quote-text-carousel').owlCarousel({
        autoplay:'autoplay',
        loop:true,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        dots:false,
        items:1
      });

      $('#quote-text-carousel')
      .on('changed.owl.carousel',function(e){
        $('#quote-image-carousel').trigger('to.owl.carousel', [e.item.index+1]);
      });

      $('.navBar').stickeyHeader({
        customNum: $('.navBar').offset().top
      });


      $('.menu-container li a').scrollAnchor({
        additional: -80
      });

      $('.page-section').activeNavLink({
        lists:$('.menu-container li'),
        additional:-80
      });
