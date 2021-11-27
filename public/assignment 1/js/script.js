let container = document.querySelector(".container");
let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");

openModal.addEventListener('click', function(){
    container.classList.add("active-modal")
})
closeModal.addEventListener('click', function(){
    container.classList.remove("active-modal")
})