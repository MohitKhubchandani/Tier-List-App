const dragElements = document.querySelectorAll(".container1")
const dropElements = document.querySelectorAll(".container")

let selected = null;


dragElements.forEach((element) => {
  element.addEventListener("dragstart", function(event) {
      selected = event.target; 
  });
});


dropElements.forEach((element) => {
  element.addEventListener("dragover", function(event) {
      event.preventDefault(); 
  });

  element.addEventListener("drop", function(event) {
      event.preventDefault();
     element.appendChild(selected)

     selected.addEventListener("dblclick", function(event){
      const tgt = event.target
      const nontier = document.querySelector(".container1") 
      nontier.appendChild(tgt)
    })
  });
});

