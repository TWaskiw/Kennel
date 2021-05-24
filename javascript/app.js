 // Fullpage.js library anchors - tillader at linke internt på siden
 var myFullpage = new fullpage('#fullpage', {
  anchors: ['firstPage', 'secondPage', 'thirdPage'],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['First page', 'Second page', 'Third and last page']
});

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

function myFunction() {
  document.getElementById("hjerte").style.color = "#F4B685";
}

function kontaktGennemfort() {
  alert("Tak for dit spørgsmål, vi har modtaget det!");
}
