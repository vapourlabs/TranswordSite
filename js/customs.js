$(document).ready(function() {
  $('.sidenav').sidenav();
  $('.dropdown-trigger').dropdown({
    'hover': false,
    'coverTrigger': false
  });
  $('.tooltipped').tooltip();
});

// THIS CODE WAS NOT WRITTEN BY ME!
// Credits: https://stackoverflow.com/questions/27747970/how-to-make-images-fade-visible-when-im-scrolling/27748638
function showImages(el) {
  var windowHeight = jQuery( window ).height();
  $(el).each(function(){
    var thisPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (topOfWindow + windowHeight - 200 > thisPos ) {
      $(this).addClass("fadeIn");
    }
  });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('.star');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('.star');
});
