"use strict";var menu_mobile=$("#js_menu_mobile"),cerounoluisrene=function(n){var e=function(){n("#js_icon_menu").on("click",function(n){n.preventDefault(),menu_mobile.css({display:"block"}),menu_mobile.addClass("bounceInRight").removeClass("fadeOutRight")})},i=function(){n("#js_icon_cerrar").on("click",function(n){n.preventDefault(),menu_mobile.removeAttr("style"),menu_mobile.addClass("fadeOutRight").removeClass("bounceInRight"),setTimeout(function(){menu_mobile.css("display","none")},500)})},o=function(){n(window).scroll(function(){n(this).scrollTop()>300?n("#js_up").slideDown(300):n("#js_up").slideUp(300)}),n("#js_up i").on("click",function(e){return e.preventDefault(),n("body,html").animate({scrollTop:0},700),!1})},t=function(){n("#js_digital_ocean").length>0&&setTimeout(function(){var e=n(".ultimos-post").offset().top,i=n(".ultimos-post").height(),o=e+i;n(window).scroll(function(){n(window).scrollTop()>=o?n("#js_digital_ocean").addClass("ditigal_ocean_fixed slideInDown"):n("#js_digital_ocean").removeClass("ditigal_ocean_fixed slideInDown")})},1e4)},s=function(){e(),i(),o(),t()};return{init:s}}(jQuery);!function(){cerounoluisrene.init()}();