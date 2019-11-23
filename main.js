$(document).ready(function(){
    $('.fa-bars').click(function(){
      $('ul').toggleClass('active')
    })
  })

 // Header fixed on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('#navv').addClass('header-scrolled');
    } else {
      $('#navv').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 500) {
    $('#navv').addClass('header-scrolled');
  }
