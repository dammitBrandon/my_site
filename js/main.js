$(document).ready(function () {
  var screenWidth = window.innerWidth;
  
// grabs the right picture depending on the screen width
  if (screenWidth <= 480) {
    $('#home-page-image').attr('src', 'images/me4.jpg');
  }
  else if (screenWidth <= 730) {
    $('#home-page-image').attr('src', 'images/me3.jpg');
  } else {
    $('#home-page-image').attr('src', 'images/me2.jpg');
  }

  $('body').scrollspy({
    target: '.navbar-main',
    offset:  -500
  });

  $('.navbar-main').smint({
    'scrollSpeed': 1000
  });
});