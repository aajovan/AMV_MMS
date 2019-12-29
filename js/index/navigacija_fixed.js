var myNav = document.getElementById('navigacija');
var logo = document.getElementById('logo');
var trazilica = document.getElementById('trazi');
var text = document.querySelectorAll('[id^="nav-text_"]');
window.onscroll = function () {
  var top = (document.documentElement && document.documentElement.scrollTop) ||
              document.body.scrollTop;
    "use strict";
    if (top >= 50 ) {
      console.log(text);
      for (let i=0; i<text.length; i++) {

          text[i].classList.remove("has-text-white");
          text[i].classList.add("has-text-link");
      };
      myNav.classList.remove("navbar-gradient");
        myNav.classList.add("navbar-white");
          trazilica.classList.add("is-outlined");
        logo.src="img/logo.png";
    }
    else {
      for (let i=0; i<text.length; i++) {
          text[i].classList.remove("has-text-link");
            text[i].classList.add("has-text-white");
      };
        myNav.classList.remove("navbar-white");
         trazilica.classList.remove("is-outlined");
        myNav.classList.add("navbar-gradient");
          logo.src="img/logo-bijeli.png";
          console.log(document.scrollingElement.scrollTop);
    }
};
