$(document).ready(function(){
  $.getJSON( webroot + "locale/messages.json", function( messages ) {
    $('#formUserChangePassword').validate({
      rules: {
        'data[User][password]': {required: true},
        'data[User][newPassword]': {required: true, minlength: 5, maxlength: 20},
        'rePassword': {
          required: true,
          minlength: 5,
          maxlength: 20,
          equalTo: "#newPassword"
        }
      },
      messages: {
        "data[User][password]": {required: messages[language].password.required},
        "data[User][newPassword]": {required: messages[language].password.required, minlength: messages[language].password.minlength, maxlength: messages[language].password.maxlength},
        "rePassword": {required: messages[language].password.requirednew, equalTo: messages[language].password.equalTo, minlength: messages[language].password.minlength, maxlength: messages[language].password.maxlength}
      },
      submitHandler: function () {
        $('#salvar').attr("disabled", "disabled");
        $('#formUserChangePassword').submit();
      }
    });
  });
});
