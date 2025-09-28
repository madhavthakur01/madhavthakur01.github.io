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

const form = document.getElementById("contact-form");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert("Your message has been sent successfully!");
            form.reset();
        } else {
            alert("Oops! Something went wrong. Please try again.");
        }
    });