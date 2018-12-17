
// Adding .active class to navbar on scroll
$(window).on("scroll", () => {
    if( $(window).scrollTop() > 800 ) {
        $(".header__navbar").addClass("active__nav");
    } else {
        $(".header__navbar").removeClass("active__nav");
    }
});


//Adding dropdown nav menu
$(".header__navbar img").on("click", () => {
  if( $(".header__nav").css("display") === "none" ) {
    $(".header__nav").css("display", "flex");
    $(".header__navbar").css("height", "21rem");
  } else if ( $(".header__nav").css("display") === "flex" ) {
    $(".header__nav").css("display", "none");
    $(".header__navbar").css("height", "auto");
  }
});


//Adding functionality so that nav items alway appear if viewport is bigger than 950px
$(window).resize(() => {
  if( window.innerWidth > 950 ) {
    $(".header__nav").css("display", "flex");
  } else {
    $(".header__nav").css("display", "none");
  }
});


//Adding smooth scrolling with jQuery
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });