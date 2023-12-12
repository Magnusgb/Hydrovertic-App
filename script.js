var button = document.getElementById("button-click");
var filterBox = document.getElementById("filter-seachbox");
var saveButton = document.getElementById("save-button");

// Array med plantenavne
var planteNavne = ["Basilikum", "Mynte", "Persille"];

// Eventlytter til knappen, der håndterer visning/skjul af filter-boksen
button.addEventListener("click", function () {
  if (filterBox.style.display === "none" || filterBox.style.display === "") {
    filterBox.style.display = "block";
  } else {
    filterBox.style.display = "none";
  }
});

// Eventlytter til gem-knappen
saveButton.addEventListener("click", function () {

  // Loop gennem plantenavne og håndter valgte planter
  for (var i = 0; i < planteNavne.length; i++) {
    var planteNavn = planteNavne[i];
    var checkbox = document.querySelector('input[name="' + planteNavn + '"]');

    // Laver loop igennem igennem array, og tjekker
    if (checkbox.checked) {
      if (planteNavn === "Basilikum") {
        window.location.href = 'basilikum.html';
        return;
      } else {
        alert(planteNavn + " er ikke tilgængelig");
        return; 
      }
    }
  }
  alert("Vælg mindst en plante.");
});