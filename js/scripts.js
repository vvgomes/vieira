$(document).ready(function() {

  (function header() {
    var menuToggle = $('#js-mobile-menu').unbind();
    $('#js-navigation-menu').removeClass("show");

    menuToggle.on('click', function(e) {
      e.preventDefault();
      $('#js-navigation-menu').slideToggle(function(){
        if($('#js-navigation-menu').is(':hidden')) {
          $('#js-navigation-menu').removeAttr('style');
        }
      });
    })
  })();

  (function giveFeedback() {
    var parts = location.href.split('?');
    if (parts.length < 2) return;
    $(parts.slice(1).join().split('&')).each(function(i, e) {
      var kv = e.split('=');
      if (kv[0] === 'status' && kv[1] === 'success') {
        alert('Mensagem enviada com sucesso. Em breve, entraremos em contato.');
      }
    });
  })();
});
