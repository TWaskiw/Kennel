// Get the modal - Sætter en variabel der hedder "loginModal"
var loginModal = document.getElementById('loginModal');

// Get the button that opens the modal
var loginBtn = document.getElementById('loginBtn');

// Get the modal
var infoModal = document.getElementById('infoModal');

// Get the button that opens the modal
var infoBtn = document.getElementById('infoBtn');

// Get the <span> element that closes the modal - Krydset der lukker boksen
var span = document.getElementsByClassName('close')[0];

var fjernPil = document.getElementsByClassName('fp.controlArrow')[0];


// When the user clicks the button, open the modal
infoBtn.onclick = function () {
    infoModal.style.display = 'block'
    fjernPil.style.position = 'relative'
};

// When the user clicks on <span> (x), close the modal - Krydset der lukker boksen
span.onclick = function () {
    infoModal.style.display = 'none' 
};

// When the user clicks anywhere outside of the modal, close it
document.onclick = function (event) {
    if (event.target == infoModal) {
        infoModal.style.display = 'none'
    };
}

// Get the button that opens the modal
/*
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}
*/