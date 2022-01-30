$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $(".burger-tst").owlCarousel({
        items:1,
        nav:false,
        dots:false,
        autoplay:false,
        loop:true,
        autoplayTimeout:5000,
        margin:30,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false
    
            }
        }

    });
    $(".header-bar").on("click", function(){
        $(".offcanvas-manu, .offcanvas-overylay").addClass(".active");  
      });
      
      
      $(".manu-close, .offcanvas-overylay").on("click", function(){
        $(".offcanvas-manu, .offcanvas-overylay").removeClass(".active");  
      });

    
  });