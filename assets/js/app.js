"use strict";var menu_mobile=$("#js_menu_mobile"),cerounoluisrene=function(e){var n=function(){e("#js_icon_menu").on("click",function(e){e.preventDefault(),menu_mobile.css({display:"block"}),menu_mobile.addClass("bounceInRight").removeClass("fadeOutRight")})},o=function(){e("#js_icon_cerrar").on("click",function(e){e.preventDefault(),menu_mobile.removeAttr("style"),menu_mobile.addClass("fadeOutRight").removeClass("bounceInRight"),setTimeout(function(){menu_mobile.css("display","none")},500)})},i=function(){function n(e,n,o){var i=new Date;i.setTime(i.getTime()+24*o*60*60*1e3);var t="expires="+i.toGMTString();document.cookie=e+"="+n+"; "+t+"; path=/"}function o(e){for(var n=e+"=",o=document.cookie.split(";"),i=0;i<o.length;i++){for(var t=o[i];" "==t.charAt(0);)t=t.substring(1);if(0==t.indexOf(n))return t.substring(n.length,t.length)}return""}function i(){t="01luisrene",""!=t&&null!=t&&(n("_01lr",t,30),e("#js_barra_aceptacion_cookie").addClass("animated zoomOutDown"),setTimeout(function(){e("#js_barra_aceptacion_cookie").css({display:"none"})},300),console.log("Haz aceptado el uso de cookies de nuestra web 01luisrene.com ❤"))}var t=o("_01lr");""==t&&(e("#js_barra_aceptacion_cookie").css({display:"block"}),setTimeout(function(){i()},5e4)),e("#js_btn_cookie").on("click",function(e){e.preventDefault(),i()})},t=function(){e(window).scroll(function(){e(this).scrollTop()>300?e("#js_up").slideDown(300):e("#js_up").slideUp(300)}),e("#js_up i").on("click",function(n){return n.preventDefault(),e("body,html").animate({scrollTop:0},1e3),!1})},s=function(){e("#js_digital_ocean").length>0&&setTimeout(function(){var n=e(".ultimos-post").offset().top,o=e(".ultimos-post").height(),i=n+o;e(window).scroll(function(){e(window).scrollTop()>=i?e("#js_digital_ocean").addClass("ditigal_ocean_fixed slideInDown"):e("#js_digital_ocean").removeClass("ditigal_ocean_fixed slideInDown")})},1e4)},c=function(){n(),o(),i(),t(),s()};return{init:c}}(jQuery);!function(){cerounoluisrene.init()}();