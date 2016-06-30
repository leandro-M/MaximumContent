$(document).ready(function() {

  $('.select-language').select2({
    templateResult: formatState,
    templateSelection: formatState,
    minimumResultsForSearch: Infinity
  });

  $("#lightgallery").lightGallery();

  $('.select-default').fancySelect();

  $("#my-menu").mmenu({
    extensions: ["border-full", "effect-menu-slide", "effect-listitems-slide", "pageshadow", "theme-dark", "pagedim"],
    navbars: [{
      position: "top",
      content: [ "<a href='#' class='button-entrar'>Entrar</a>" ],
      height: 2
    }]
  }, {
    // configuration

  });

  var API = $("#my-menu").data( "mmenu" );
  $(".button-menu").click(function() {
    API.open();
  });

  $('body').flowtype({
    minFont : 30,
    maxFont :  38,
  });

  $(".videos-destaques-ao_vivo-button").click(function (e) {
    $('.videos-destaques-ao_vivo-programacao').addClass("open");
    $('.videos-destaques-ao_vivo-button').addClass("open");
  });

  $(".videos-destaques-btn-close").click(function (e) {
    $('.videos-destaques-ao_vivo-programacao').removeClass("open");
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.open').length) $('.videos-destaques-ao_vivo-programacao').removeClass("open");
    if (!$(e.target).closest('.open').length) $('.videos-destaques-ao_vivo-button').removeClass("open");
  });

  $(".button-buscar").click(function (e) {
    $('.busca-overlay').addClass("open");
    $('.main').addClass("blur");
    $('.main').addClass("none");
    $('html,body').addClass("overflow");
    API.close();
  });

  $(".button-close").click(function (e) {
    $('.busca-overlay').removeClass("open");
    $('.main').removeClass("blur");
    $('.main').removeClass("none");
    $('html,body').removeClass("overflow");
  });



  $(".button-entrar").click(function (e) {
    $('.login-box-overlay').addClass("open");
    $('.main').addClass("blur");
    $('.main').addClass("none");
    $('html,body').addClass("overflow");
    API.close();
  });

  $(".login-box-fechar").click(function (e) {
    $('.login-box-overlay').removeClass("open");
    $('.main').removeClass("blur");
    $('.main').removeClass("none");
    $('html,body').removeClass("overflow");
  });



  $( ".btn-like" ).click(function() {
    $(this).toggleClass( "checked" );
  });


  $(".btn-share").click(function (e) {
    $('.social').addClass("open");
    e.stopPropagation();
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.open').length) $('.social').removeClass("open");
  });



  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:3,
    dots: false,
    responsiveClass:true,
    slideBy: 2,
    // lazyLoad:true,
    nav:true,
    navText: ["<i class='icon ion-ios-arrow-left'></i>","<i class='icon ion-ios-arrow-right'></i>"],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:4
      },
      1500: {
        items:5
      }
    }
  });






  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  });
});

(function($){
  $(window).load(function(){
    $(".programacao-wrapper").mCustomScrollbar();
  });
})(jQuery);


(function($){
  $(window).load(function(){
    $(".programa-video-grade-programacao-wrapper, .start-horse-detalhes-info_wrapper-texto, .event-detail_info-text_wrapper").mCustomScrollbar();
  });
})(jQuery);

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".button-float").addClass("visible");
  } else {
    $(".button-float").removeClass("visible");
  }
});

$(document).ready(function() {
  $('.modal-content').click(function() {
    $('.modal-wrapper.content-modal').toggleClass('open');
    $('html,body').toggleClass("overflow");
    return false;
  });

  $('.modal-snip').click(function() {
    $('.modal-wrapper.snip-modal').toggleClass('open');
    $('html,body').toggleClass("overflow");
    return false;
  });
});
