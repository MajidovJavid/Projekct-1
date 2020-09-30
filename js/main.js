
$(document).ready(function(){

  $(window).scroll(function(){
      var navbar = $('header nav'),
          navHeight = navbar.height(),
          scrollPos = $(this).scrollTop();

      if(scrollPos > navHeight){
          navbar.addClass('fixed');
          $('header').css('padding-top', navHeight + 'px')
      }
      else {
          navbar.removeClass('fixed');
          $('header').css('padding-top', '0')
      }

  });


  $("a").yashillashdir({ color: "orange", loop: true });
  $("p").yashillashdir().addClass("active");
  $("span").yashillashdir();

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      800: {
        items: 3,
      },
      7000: {
        items: 9,
      },
    },
  });

});


