(function(){
  "use strict";

  $('.step').on('click', 'a', function (e) {
    e.preventDefault();

    // Remove selected class from any other items in same column
    $(this).closest('.step').find('.selected').removeClass('selected');

    // Add the selected class to the element the user clicked on
    $(this).addClass('selected');

    // Fade in the next step
    $(this).closest('.step').next('.step').fadeIn(350);
  });


  $('#email').on('blur', function () {
    // Cache the element
    var self = $(this);
    // Regex for testing email format
    var emailPattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    clearErrorStyles(self);

    if (self.val() === '') {
      // If user hasn't entered a value, add required error message and styles
      addRequiredError(self);

    } else if (! emailPattern.test(self.val()) ) {
      // If format isn't valid, add invalid format error and styles
      addInvalidFormatMessage(self);
    }

    
  });

  $('#phone').on('blur', function () {
    // Cache the element
    var self = $(this);
    // Regex for testing phone format
    var phonePattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;

    clearErrorStyles(self);

    if (self.val() === '') {
      // If user hasn't entered a value, add required error message and styles
      addRequiredError(self);

    } else if (!phonePattern.test(self.val())) {
      // If format isn't valid, add invalid format error and styles
      addInvalidFormatMessage(self);

    }


  });

  $('#full-name').on('blur', function () {
    var self = $(this);

    clearErrorStyles(self);

    if (self.val() === '') {
      // If user hasn't entered a value, add required error message and styles
      addRequiredError(self);
    }

  });


  function addInvalidFormatMessage (field) {
    field.addClass('error');
    field.after('<p class="error-message">Please enter a valid format.</p>');
  }

  function addRequiredError (field) {
    field.addClass('error');
    field.after('<p class="error-message">This is a required field.</p>');
  }

  function clearErrorStyles (field) {
    field.next('.error-message').html('');
    field.removeClass('error');
  }

})();