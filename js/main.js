$().ready(function () {
  var screenWidth = window.innerWidth;
  
  if (screenWidth <= 480) {
    $('#home-page-image').attr('src', 'images/me4.jpg');
  }
  else if (screenWidth <= 730) {
    $('#home-page-image').attr('src', 'images/me3.jpg');
  } else {
    $('#home-page-image').attr('src', 'images/me2.jpg');
  }
});