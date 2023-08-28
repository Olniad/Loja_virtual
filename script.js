const button = document.getElementById("reclamacao");
const modal = document.getElementById("modal");
const buttonClose = document.querySelector("#modal button");

button.addEventListener("click", function() {
  modal.style.display = "block";
});

buttonClose.addEventListener("click", function() {
  modal.style.display = "none";
});


document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});

  
  
