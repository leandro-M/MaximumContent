$(document).ready(function(){
    $("[data-id='search-submit']").click(function(){
        var term = $("[data-id='search-input']").val();
        if(term){
            alert('SUBMETER');
            $("#formSearch").submit();
        } else {
            alert('VALIDACAO');
        }
    });
});