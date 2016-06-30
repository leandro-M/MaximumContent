$(document).ready(function () {
    $("[data-id='shows_hbc']").click(function () {
        var hbc_id = $(this).attr('data-hbc_id');
        $.ajax({
            type: 'GET',
            url: home + 'home/showSchedule/' + hbc_id,
            error: function () {
                $("[data-id='banner-topo']").fadeIn();
            },
            beforeSend: function () {
                $("[data-id='banner-topo']").fadeOut();
                $("[data-id='schedule-show']").html('');
                $('.loader').fadeIn();
            },
            success: function (retorno) {
                setTimeout(function(){
                    $('.loader').fadeOut();
                    setTimeout(function(){
                        $("[data-id='schedule-show']").html(retorno);
                    }, 400);
                }, 1000);
            }
        });

    });
});
