var button = document.getElementById("button-click");
var filterBox = document.getElementById("filter-seachbox");
var saveButton = document.getElementById("save-button");

var planteNavne = ["Basilikum", "Mynte", "Persille"];

// Event til ikon der viser/skjuler filterboksen
button.addEventListener("click", function () {
  if (filterBox.style.display === "none") {
    filterBox.style.display = "block";
  } else {
    filterBox.style.display = "none";
  }
});

//Funktion & loop der tjekker hvad som er trykket på i filterboks 
saveButton.addEventListener("click", function () {

  for (var i = 0; i < planteNavne.length; i++) {
    var planteNavn = planteNavne[i];
    var checkbox = document.querySelector('input[name="' + planteNavn + '"]');

    if (checkbox.checked) {
      if (planteNavn === "Basilikum") {
        window.location.href = 'basilikum.html';
        return;
      } else {
        alert(planteNavn + " er ikke tilgængelig");
      }
    }
  }
});

