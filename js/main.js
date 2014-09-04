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

// adds and removes .active from menu links
//  $('nav#nav ul li a').click(function(e) {
//    var $this = $(this);
//    if (!$this.parent().hasClass('active')) { $this.parent().addClass('active').siblings().removeClass('active');}
//  });
  
//  $('.navbar-main').smint({
//    'scrollSpeed': 1000
//  });
});