$(document).ready(function(){
  $.getJSON( webroot + "locale/messages.json", function( messages ) {
    $('#formUserForgotPassEmail').validate({
      errorPlacement: function (error, element) {
        error.css({'padding-left': '0px', 'color': '#dc8d99', 'font-weight': 'bold', 'margin-right': '10px', 'padding-bottom': '2px'});
        error.insertAfter(element);
      },
      rules: {
        'data[User][email]': {
          required: true

        }
      },
      messages: {
        "data[User][email]": {required: messages[language].email.required}
      },
      submitHandler: function (form) {
        $('#salvar').attr("disabled", "disabled");
        form.submit();
      }
    });
  });
});
