//Animates the menu bar and removes it everytime we clicked on the bars

const menudrop=document.querySelector(".menudrop");
const container=document.querySelector(".container");

menudrop.addEventListener("click",() =>{container.classList.toggle("active");});