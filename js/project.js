// Smooth scroll this mother!

$('nav a, .scroll').on('click', function(e) {

  e.preventDefault();

  var thisTarget = $(this).attr('href');

  var targetOffset = $(thisTarget).offset().top;

  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});
