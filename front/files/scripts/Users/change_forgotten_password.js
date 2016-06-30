$(document).ready(function() {
  $.getJSON( webroot + "locale/messages.json", function( messages ) {
    $('#formUserForgotPassword').validate({
      errorPlacement: function(error, element) {
        error.css({
          'padding-left': '0px',
          'color': '#dc8d99',
          'font-weight': 'bold',
          'margin-right': '10px',
          'padding-bottom': '2px'
        });
        error.insertAfter(element);
      },
      rules: {
        'data[User][newPassword]': {
          required: true,
          minlength: 5,
          maxlength: 20
        },

        'data[User][rePassword]': {
          required: true,
          minlength: 5,
          maxlength: 20,
          equalTo: "#newPassword"
        }
      },
      messages: {
        "data[User][newPassword]": {
          required: messages[language].password.required,
          minlength: messages[language].password.minlength,
          maxlength: messages[language].password.maxlength
        },
        "data[User][rePassword]": {
          required: messages[language].password.required,
          equalTo: messages[language].password.equalTo,
          minlength: messages[language].password.minlength,
          maxlength: messages[language].password.maxlength
        }
      },
      submitHandler: function(form) {
        $('#salvar').attr("disabled", "disabled");
        form.submit();
      }
    });
  });
});
