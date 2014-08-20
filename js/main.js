var $ = require('jquery');
var dropo = require('dropotron');
var config = require('./config');
var skel = require('skeljs');


$().ready(function () {
  var screenWidth = window.innerWidth;
  if (screenWidth <= 480) {
    $('#home-page-image').attr('src', 'images/me4.jpg');
  }
  else if (screenWidth <= 720) {
    $('#home-page-image').attr('src', 'images/me3.jpg');
  } else {
    $('#home-page-image').attr('src', 'images/me2.jpg');
  }
});