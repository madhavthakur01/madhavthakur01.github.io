// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

const navbarLogo = document.getElementById("logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) { // adjust scroll threshold
    navbarLogo.textContent = "Raj Singh";
  } else {
    navbarLogo.textContent = "PORTFOLIO";
  }
});

//extra js

// window.onload = function() {
//     // Page load hote hi form reset ho jaye
//     const form = document.querySelector("form");
//     if (form) form.reset();
// };
