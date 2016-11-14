'use strict';
var agente = navigator.userAgent.toLowerCase(),
    menu_mobile = $('#js_menu_mobile');

var cerounoluisrene = (function ($) {

var
  headroom = function(){
    $('#header').headroom({
      'tolerance': {
        'down' : 10,
        'up' : 20
      },
      'offset' : 205,
      'classes': {
        'initial': 'animated',
        'pinned': '',
        'unpinned': ''
      }
    });
  },
  displayMenu = function(){
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
      setTimeout(function(){ menu_mobile.css('display', 'none'); }, 400);
    });
  },
  //search artículos
  ghostHunter = function(){
	  $('#js_campo_buscador').ghostHunter({
	    results             : '#js_resultados',
	    onKeyUp             : !0,
	    rss                 : '/rss/',
	    displaySearchInfo   : true
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
          console.log("cookie ❤ " + user + " creada.");
       }
    }
      $('#js_btn_cookie').on('click', function(e) {
        e.preventDefault();
        crearCookie();
      });
      setTimeout(function(){crearCookie();}, 15000);
  },
  botonUp = function(){
    $(window).scroll(function(){
      if($(this).scrollTop() > 300){
        $("#js_up").show(); //fadeIn
      }else{
        $("#js_up").fadeOut(); //fadeOut
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
  imprimirCurriculum = function(){
		$('#js_imprimir_curriculum').on('click', function(e) {
			e.preventDefault();
			window.print();
			return false;
		});
  },
  disqus = function (newIdentifier, newUrl, newTitle) {
    if ($('#disqus_thread').length) {
    if (typeof DISQUS === 'undefined') {
      /* * * CONFIGURATION VARIABLES * * */
      var disqus_shortname = '01luisrenemas'; // required: replace example with your forum shortname
      var disqus_identifier = newIdentifier;
      var disqus_url = newUrl;
      var disqus_title = newTitle;

      /* * * DON'T EDIT BELOW THIS LINE * * */
      (function() {
          var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
          dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();
    } else {
        DISQUS.reset({
          reload: true,
          config: function () {
            this.page.identifier = newIdentifier;
            this.page.url = newUrl;
            this.page.title = newTitle;
          }
        });
      }
    }
  },
 // 01luisrene javascripts initialization
  init = function () {
    headroom();
    displayMenu();
    closeMenu();
    ghostHunter();
    politicaCookies();
    botonUp();
    imprimirCurriculum();
    disqus(window.location.href, window.location.href, $('.post-title').text());
  };

  return {
      init: init
  };

})(jQuery);

(function () {
    cerounoluisrene.init();
})();