const contenedorPersonal = document.querySelector("#personal ul")
const contenedorPersonal = document.querySelector("#estudios ul")
const contenedorPersonal = document.querySelector("#experiencia ul")
const contenedorPersonal = document.querySelector("#skills ul")

fetch("amarillo.json")
.then(resp => resp.json())
.then(data => crearCV(data))

function crearCV(cv){
    console.log(cv)
}