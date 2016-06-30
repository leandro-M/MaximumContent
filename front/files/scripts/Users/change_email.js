$(document).ready(function(){
  $.getJSON( webroot + "locale/messages.json", function( messages ) {
    $('#formUserChangeEmail').validate({
      rules: {
        'data[User][email]': {
          required: true,
          email: true,
          remote: {
            url: home + "users/checkEmail",
            type: "POST",
          }
        },
      },
      messages: {
        "data[User][email]": {required: messages[language].email.required, remote: messages[language].email.remote, email: messages[language].email.email },
      }
    });
  });
});
