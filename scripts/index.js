$(function () {
  var isMobile;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    console.log("truw");
    isMobile = true;
  } else {
    console.log("false");
  }



  // nav

  var homeBottom;
  var navPos = $("nav").position().top;
  var lastPos = 0;

  $(window).on("scroll", function () {
    homeBottom = $(window).height();
    var pos = $(window).scrollTop();
    var pos2 = pos + 50;

    if (!isMobile) {
      if (pos >= homeBottom - 50) {
        $("nav").addClass("fixed");
      }
      if (pos <= homeBottom - 50) {
        if ($("nav").hasClass("fixed")) {
          $("nav").addClass("slideOut");
          setTimeout(function(){
            $('nav').removeClass('fixed')
          },1000);
          setTimeout(function(){
            $('nav').removeClass('slideOut')
          },1000);
        }
      }
    }
  });

  // btns
  $(".btn.project").on("click", function () {
    $("html, body")
      .delay(200)
      .animate(
        {
          scrollTop: $("#portfolio").offset().top,
        },
        1000
      );
  });

  $(".page-link").on("click", function () {
    var go = $(this).attr("go");
    $("html, body")
      .delay(200)
      .animate(
        {
          scrollTop: $("#" + go).offset().top,
        },
        1000
      );
  });
});
