$(document).ready(function(){
  $.getJSON( webroot + "locale/messages.json", function( messages ) {
    $('#formUserAdd').validate({
      rules: {
          'data[User][name]': {
            required: true
          },
          'data[User][email]': {
          required: true,
          email: true,
          remote: {
            url: home + "users/checkEmail",
            type: "POST",
          }
        },
        'data[User][password]': {required: true, minlength: 5, maxlength: 20},
      },
      messages: {
        // "data[User][name]": {required: 'Preencha seu nome.'},
        "data[User][email]": {required: messages[language].email.required, remote: messages[language].email.remote, email: messages[language].email.email },
        "data[User][password]": {required: messages[language].password.required, minlength: messages[language].password.minlength, maxlength: messages[language].password.maxlength}
      },
      submitHandler: function() {
        $('[data-id="addUser"]').attr("disabled", "disabled");
        data = $('#formUserAdd').serialize();
        $.ajax({
          type: 'post',
          url: home + 'users/save',
          data: data,
          error: function () {

          },
          beforeSend: function () {

          },
          success: function (retorno) {
            if(retorno.trim() == 'true'){
              $('html, body').animate({
                scrollTop: $("#paypal").offset().top
              }, 1000);
              /// liberar botao
              $("[data-id='paypal-link']").attr('href', $("[data-id='paypal-link']").attr('data-href')).removeClass('btn-disabled');
            }
          }
        });
      }
    });
  });
});
