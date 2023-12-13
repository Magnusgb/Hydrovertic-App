let modal = document.getElementById('simpleModal');
//åben modal
let modalBtn = document.getElementById('modalBtn');
//luk modal
let closeBtn = document.getElementsByClassName('closeBtn')[0];
let gemBtn = document.getElementsByClassName('gemBtn')[0];

//åben
modalBtn.addEventListener('click', openModal)
//luk
closeBtn.addEventListener('click', closeModal)
gemBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)

//åben
function openModal(){
    modal.style.display = 'block';
}

//luk
function closeModal(){
    modal.style.display = 'none';
}

function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}


//optionbox
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

//åben
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

//valg + luk
optionsList.forEach(listen => {
  listen.addEventListener("click", () => {
    selected.innerHTML = listen.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});