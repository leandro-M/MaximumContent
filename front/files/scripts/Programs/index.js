$(document).ready(function(){
  var page = 1;
  $('[data-id="load-more"]').click(function(){
    page++;
    var that = this;
    if(page <= limitPage) {
      $.ajax({
        type: 'GET',
        url: home + 'programs/getMorePrograms/page:' + page,
        error: function () {
          $('.programs-loader').hide();
        },
        beforeSend: function () {
          $('.programs-loader').show();
        },
        success: function (retorno) {
          $('[data-id="programs-list"]').append(retorno);
          $('.programs-loader').hide();
          if(page == limitPage) {
            $(that).hide();
          }
        }
      });
    }
  });
});
