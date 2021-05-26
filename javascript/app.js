//Instagram API Access token
var feed = new Instafeed({
  accessToken: 'IGQVJVblRJTWZAzUnJUVU12NHNnV1RndkdoWjR6dmNMdVNUdndGVTRncWNvMjBWS2hKdGhXeEpZASGVTSW9jdGpHVFpKVWFsWWJXWEVya0x1RkV4c3BiZADBIeWhsV0k0THpWeEg0NEtJZAnNoOFhOQm82MAZDZD'
});
feed.run(); 


// Åben/luk burgermenu
function aabenLuk() {
  const burgeren = document.getElementById("menu");
  if (burgeren.style.display === "block") {
    burgeren.style.display = "none";
  } else {
    burgeren.style.display = "block";
  }
}

// Åben/luk navigation dropdown + rotér pil
function navUL(index) {
  const aabennav = document.getElementById('ulListe' + index);
  const roterpil = document.getElementById("pilned" + index);
  // Åbner dropdown menu når man klikker på pil
  if (aabennav.style.display === "block") {
    aabennav.style.display = "none";
  } else {
    aabennav.style.display = "block";
  }
  // Roterer pilen 180 grader når man åbner dropdown menu
  if (roterpil.style.transform === "rotate(180deg)") {
    roterpil.style.transform = "none";
  } else {
    roterpil.style.transform = "rotate(180deg)";
  }
}


// Slideshow
var anmeldIndex = 1;
showSlides(anmeldIndex);

function plusSlides(n) {
    showSlides(anmeldIndex += n);
}

function nuvaerende(n) {
    showSlides(anmeldIndex = n);
}

// Henter elementer fra HTML
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
  // 15 sekunders interval mellem skift af anmeldelse
    setInterval(function () {
        plusSlides(1);
    }, 15000);
}



// Starter med at finde alle elementer med class "toggleheart".
var hearts = document.getElementsByClassName('toggleheart')
// Laver en ny variabel, som er en tom array (liste), der skal bruges til at holde styr på toggle status (skift mellem farve).
var togglehearts = [true, true, true, true, false]

// Vi looper igennem alle hearts (altså alle "toggleheart" elementer).
for (let index = 0; index < hearts.length; index++) {
  // Vi definere præcis det element der klikkes på.
  const element = hearts[index];
  // Vi sætter en start-status på vores tomme liste.
  togglehearts[index] = true
  // Her registrerer vi et klik, og sætter det til en funktion. 
  element.onclick = function (event) {
    // Vi ændrer farven afhængigt af status (true eller false).
    event.target.style.color = togglehearts[index] ? "#F4B685" : 'white';
    // Ved brug af "!" (negerer), toggler vi mellem true og false (de to farver).
    togglehearts[index] = !togglehearts[index]
  }
}





function kontaktGennemfort() {
  const name = document.getElementById('name')
  const email = document.getElementById('email')
if (name.value !== "" && email.value !== "") {
  alert("Tak for dit spørgsmål, vi har modtaget det!");
}
}

function feedback(index) {
  document.getElementById('vote-feedback' + index).style.display = 'none';
  document.getElementById('tak-feedback' + index).style.display = 'block';
}

function resetVaerdier() {
  document.getElementById('ansvarlighed').style.display = 'none';
  document.getElementById('abenhed').style.display = 'none';
  document.getElementById('omsorg').style.display = 'none';
}

function vaerdier(value) {
  resetVaerdier()
  document.getElementById(value).style.display = 'block';
}
