//jquery slider plugin
$('.visual').slick({ 
  infinite: true,
  speed:500, // slide speed
  autoplay: true, //autoplay
  autoplaySpeed:3000
});

//menu button toggler
$(function() {
  $("#menu-toggle").click(function() {
    $(".navbar-nav").stop().slideToggle("fast");
  });
});

//collapse: navbar background change
(function ($) {
  var navbarCollapse = function () {
      if ($("#mainNav").offset().top > 100) {
          $("#mainNav").addClass("navbar-shrink");
      } else {
          $("#mainNav").removeClass("navbar-shrink");
      }
  };
  //if not page top, launch navbarCollapse()
  navbarCollapse();
  $(window).scroll(navbarCollapse);
  })(jQuery);

//modal1
$(function() {
    $(document).ready(function() {
      //해당 서비스 클릭 시 열림
      $("#item1").click(function() {
        $("#myModal1").css({
          "display": "block"
        });
      });
   
      //모달외 구역 클릭 시 닫힘
      $("html").click(function(event) {
        if (event.target.id === "myModal1") {
          $("#myModal1").css({
            "display": "none"
          });
        }
      });
   
    });
   
})

//modal2
$(function() {
    $(document).ready(function() {
      //해당 서비스 클릭 시 열림
      $("#item2").click(function() {
        $("#myModal2").css({
          "display": "block"
        });
      });

      //모달외 구역 클릭 시 닫힘
      $("html").click(function(event) {
        if (event.target.id === "myModal2") {
          $("#myModal2").css({
            "display": "none"
          });
        }
      });
   
    });
   
})  

//modal3
$(function() {
    $(document).ready(function() {
      //해당 서비스 클릭 시 열림
      $("#item3").click(function() {
        $("#myModal3").css({
          "display": "block"
        });
      });

      //모달외 구역 클릭 시 닫힘
      $("html").click(function(event) {
        if (event.target.id === "myModal3") {
          $("#myModal3").css({
            "display": "none"
          });
        }
      });
   
    });
   
}) 
  
//modal4
$(function() {
    $(document).ready(function() {
      //해당 서비스 클릭 시 열림
      $("#item4").click(function() {
        $("#myModal4").css({
          "display": "block"
        });
      });

      //모달외 구역 클릭 시 닫힘
      $("html").click(function(event) {
        if (event.target.id === "myModal4") {
          $("#myModal4").css({
            "display": "none"
          });
        }
      });
   
    });
   
}) 

//modal5
$(function() {
  $(document).ready(function() {
    //해당 서비스 클릭 시 열림
    $("#item5").click(function() {
      $("#myModal5").css({
        "display": "block"
      });
    });

    //모달외 구역 클릭 시 닫힘
    $("html").click(function(event) {
      if (event.target.id === "myModal5") {
        $("#myModal5").css({
          "display": "none"
        });
      }
    });
 
  });
 
})

//modal6
$(function() {
  $(document).ready(function() {
    //해당 서비스 클릭 시 열림
    $("#item6").click(function() {
      $("#myModal6").css({
        "display": "block"
      });
    });

    //모달외 구역 클릭 시 닫힘
    $("html").click(function(event) {
      if (event.target.id === "myModal6") {
        $("#myModal6").css({
          "display": "none"
        });
      }
    });
 
  });
 
})

//modal7
$(function() {
  $(document).ready(function() {
    //해당 서비스 클릭 시 열림
    $("#item7").click(function() {
      $("#myModal7").css({
        "display": "block"
      });
    });
 
    //모달외 구역 클릭 시 닫힘
    $("html").click(function(event) {
      if (event.target.id === "myModal7") {
        $("#myModal7").css({
          "display": "none"
        });
      }
    });
 
  });
 
})

//modal8
$(function() {
  $(document).ready(function() {
    //해당 서비스 클릭 시 열림
    $("#item8").click(function() {
      $("#myModal8").css({
        "display": "block"
      });
    });
 
    //모달외 구역 클릭 시 닫힘
    $("html").click(function(event) {
      if (event.target.id === "myModal8") {
        $("#myModal8").css({
          "display": "none"
        });
      }
    });
 
  });
 
})

//modal9
$(function() {
  $(document).ready(function() {
    //해당 서비스 클릭 시 열림
    $("#item9").click(function() {
      $("#myModal9").css({
        "display": "block"
      });
    });

    //모달외 구역 클릭 시 닫힘
    $("html").click(function(event) {
      if (event.target.id === "myModal9") {
        $("#myModal9").css({
          "display": "none"
        });
      }
    });
 
  });
 
})

//modal10
$(function() {
  $(document).ready(function() {
    //해당 서비스 클릭 시 열림
    $("#item10").click(function() {
      $("#myModal10").css({
        "display": "block"
      });
    });
 
    //모달외 구역 클릭 시 닫힘
    $("html").click(function(event) {
      if (event.target.id === "myModal10") {
        $("#myModal10").css({
          "display": "none"
        });
      }
    });
 
  });
 
})

//modal11
$(function() {
  $(document).ready(function() {
    //해당 서비스 클릭 시 열림
    $("#item11").click(function() {
      $("#myModal11").css({
        "display": "block"
      });
    });

    //모달외 구역 클릭 시 닫힘
    $("html").click(function(event) {
      if (event.target.id === "myModal11") {
        $("#myModal11").css({
          "display": "none"
        });
      }
    });
 
  });
 
})