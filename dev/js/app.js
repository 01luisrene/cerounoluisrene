'use strict';
var menu_mobile = $('#js_menu_mobile');
var cerounoluisrene = (function ($) {

var  displayMenu = function(){
  	$('#js_icon_menu').on('click', function(e) {
      e.preventDefault();
      menu_mobile.css({
        display: 'block'
      });
      menu_mobile.addClass('bounceInRight').removeClass('fadeOutRight');
    });
  },
  closeMenu = function(){
    $('#js_icon_cerrar').on('click', function(event) {
      event.preventDefault();
      menu_mobile.removeAttr('style');
      menu_mobile.addClass('fadeOutRight').removeClass('bounceInRight');
      setTimeout(function(){ menu_mobile.css('display', 'none'); }, 500);
    });
  },
  politicaCookies = function(){
  	function setCookie(cname,cvalue,exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires=" + d.toGMTString();
	    document.cookie = cname+"="+cvalue+"; "+expires + "; path=/";
		}

		function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
	    }
		    return "";
		}

    var user=getCookie("_01lr");
    if (user == "") {
      $('#js_barra_aceptacion_cookie').css({
        display: 'block'
      });
      setTimeout(function(){crearCookie();}, 50000);
     }
    
    function crearCookie(){
      user = '01luisrene';
      if (user != "" && user != null) {
        setCookie("_01lr", user, 30);
        $('#js_barra_aceptacion_cookie').addClass("animated zoomOutDown");
        setTimeout(function(){
          $('#js_barra_aceptacion_cookie').css({
            display: 'none'
          });
        }, 300);
        console.log("Haz aceptado el uso de cookies de nuestra web 01luisrene.com ❤");
      }
    }
    $('#js_btn_cookie').on('click', function(e) {
      e.preventDefault();
      crearCookie();
    });
  },
  botonUp = function(){
    $(window).scroll(function(){
      if($(this).scrollTop() > 300){
        $("#js_up").slideDown(300);
      }else{
        $("#js_up").slideUp(300);
      }
    });
    $("#js_up i").on('click', function (e) {
      e.preventDefault();
        $("body,html").animate({
        scrollTop: 0
      },700);
      return false;
    });
  },
  //Colocar Digital Ocean Fixed
  digitalOcean = function(){
    //Comprobamos si existe el contenedor con el ID js_digital_ocean
    if($('#js_digital_ocean').length > 0){ 
    setTimeout(function(){
    var post = $(".ultimos-post").offset().top,
        altura = $('.ultimos-post').height(),
        fixed = post + altura;
    
    $(window).scroll(function () {
      if ($(window).scrollTop() >= fixed) {
        $('#js_digital_ocean').addClass('ditigal_ocean_fixed slideInDown');
      }else{
        $('#js_digital_ocean').removeClass('ditigal_ocean_fixed slideInDown');
      }
    });
    }, 10000);
    }
  },
 // 01luisrene javascripts initialization
  init = function () {
    displayMenu();
    closeMenu();
    //politicaCookies();
    botonUp();
    digitalOcean();
  };

  return {
      init: init
  };

})(jQuery);

(function () {
    cerounoluisrene.init();
})();