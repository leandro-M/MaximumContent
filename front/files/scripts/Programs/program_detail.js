$(document).ready(function(){
    $('[data-id="select-season"] option:last-child').attr('selected', 'selected');
    if ( $( '[data-id="select-season"]' ).length ) {
        selectEvents();
    }
});

function selectEvents(){
    var selectSeason = $('[data-id="select-season"]');
    selectSeason.trigger('update.fs');
    selectSeason.fancySelect().on('change.fs', function() {
        $(this).trigger('change.$');
    });

    selectSeason.change(function(){
        var season = $(this).find('option:selected').val();
        $('[data-id="season-block"]').fadeOut('slow');
        $('[data-season-id="'+season+'"]').fadeIn('slow');
    });
    selectSeason.trigger('change.$');
}
