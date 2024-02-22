const contenedorPersonal = document.querySelector("#personal ul")
const contenedorEstudios = document.querySelector("#estudios ul")
const contenedorExperiencia = document.querySelector("#experiencia ul")
const contenedorSkills = document.querySelector("#skills ul")

fetch("amarillo.json")
.then(resp => resp.json())
.then(data => crearCV(data))

function crearCV(cv){

    const {personal, estudios, experiencia, skills} = cv
    const {nombre, direccion, telefono, correo_electronico} = personal

    contenedorPersonal.innerHTML = `
    <li>${nombre}</li>
    <li>${direccion}</li> 
    <li>${telefono}</li>
    <li>${correo_electronico}</li>
    `

   estudios.forEach((item) => {
    console.log(item)

    const {titulo,institucion,fecha_inicio} = item

    contenedorEstudios.innerHTML += `
    <li>${titulo}</li>
    <li>${fecha_inicio}</li>
    <li>${institucion}</li>
    `
   })
    experiencia.forEach((item) => {
        console.log(item)
    
        const {puesto,empresa,fecha_inicio,fecha_fin,responsabilidades} = item
    
        contenedorExperiencia.innerHTML += `
        <li>${puesto}</li>
        <li>${empresa}</li>
        <li>${fecha_inicio}</li>
        <li>${fecha_fin}</li>
        <li>${responsabilidades}</li>
        `

   })
 

}