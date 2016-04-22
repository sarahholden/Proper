// Smooth scroll this mother!

$('nav a, .scroll').on('click', function(e) {

  e.preventDefault();

  var thisTarget = $(this).attr('href');

  var targetOffset = $(thisTarget).offset().top;

  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});


$('.col-3 a').on('click', function (e) {
  e.preventDefault();
  $(this).closest('.col-3').find('.selected').removeClass('selected');
  $(this).addClass('selected');
  $(this).closest('.col-3').next('.col-3').fadeIn(350);
});


$('#booking_form').on('submit', function (e) {
  $('input').removeClass('error');
  e.preventDefault();

  var fullName = $('#full_name').val();
  var email = $('#email').val();
  var phone = $('#phone').val();

  var emailPattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  var phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;


  if (fullName === '') {
    $('#full_name').addClass('error');
  }

  if (email === '' || !emailPattern.test(email)) {
    $('#email').addClass('error');
  }

  if (!phonePattern.test(phone)) {
    $('#phone').addClass('error');
  }

}); 