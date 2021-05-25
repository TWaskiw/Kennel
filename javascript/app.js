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

var toggle1 = true
var toggle2 = true
function hjerte(index) {
  if (index === 1){
    document.getElementById("hjerte" + index).style.color = toggle1 ? 'white': "#F4B685";
    toggle1 = !toggle1
  }

  if (index === 2){
    document.getElementById("hjerte" + index).style.color = toggle2 ? 'white': "#F4B685";
    toggle2 = !toggle2
  }
}


function kontaktGennemfort() {
  const name = document.getElementById('name')
  const email = document.getElementById('email')
if (name.value !== "" && email.value !== "") {
  alert("Tak for dit spørgsmål, vi har modtaget det!");
}
  console.log(name.value)


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
