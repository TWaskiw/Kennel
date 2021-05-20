var anmeldIndex = 1;
showSlides(anmeldIndex);

function plusSlides(n) {
    showSlides(anmeldIndex += n);
}

function nuvaerende(n) {
    showSlides(anmeldIndex = n);
}

function showSlides(n) {
    var am;
    var anmeld = document.getElementsByClassName("anmeldelse");
    var prikkerne = document.getElementsByClassName("prik");
    if (n > anmeld.length) {
        anmeldIndex = 1
    }
    if (n < 1) {
        anmeldIndex = anmeld.length
    }
    for (am = 0; am < anmeld.length; am++) {
        anmeld[am].style.display = "none";
    }
    for (am = 0; am < prikkerne.length; am++) {
        prikkerne[am].className = prikkerne[am].className.replace("aktive", "");
    }
    // display:none i CSS ændres til display: block
    anmeld[anmeldIndex - 1].style.display = "block";
    // Giver farve på prikkens respektive slide
    prikkerne[anmeldIndex - 1].className += " aktive";
}

// Loader automatisk funktionen når man åbner siden
window.onload = function () {
    setInterval(function () {
        plusSlides(1);
    }, 15000);
}