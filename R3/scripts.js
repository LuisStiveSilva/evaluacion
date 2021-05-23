let abrir = document.getElementById("play")
let cerrar = document.getElementById("cerrar")
let modal=document.getElementById("ventana")
let modalCont = document.getElementById("modal-container")
let video = document.getElementById("video")

abrir.addEventListener("click", ()=>{
    modalCont.style.visibility="visible"
    modalCont.style.opacity="1"
    modal.classList.toggle("modal-cerrado")
    video.setAttribute("src", "lollapalooza2021.mp4")
})

cerrar.addEventListener("click", ()=>{
    modal.classList.toggle("modal-cerrado")
    setTimeout(() => {
        modalCont.style.visibility="hidden"
        modalCont.style.opacity="0"
        video.setAttribute("src", "")
    }, 500);
})