$(document).ready(function(){
  var page = 1;
  $('[data-id="load-more"]').click(function(){
    page++;
    var that = this;
    if(page <= limitPage) {
      $.ajax({
        type: 'GET',
        url: home + 'getMoreVideosByGenre/' + genre + '/page:' + page,
        error: function () {
          alert("Ocorreu um erro");
        },
        beforeSend: function () {
					//MOSTRAR LOADER
				},
        success: function (retorno) {
          $('#og-grid').append(retorno);
          Grid.addItems($('.grid-page-' + page));
          if(page == limitPage) {
            $(that).hide();
          }
        }
      });
    }
  });
});
