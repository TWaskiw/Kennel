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

function navUL() {
  const aabennav = document.getElementById("ulListe");
  if (aabennav.style.display === "block") {
    aabennav.style.display = "none";
  } else {
    aabennav.style.display = "block";
  }
}
