const contenedorPersonal = document.querySelector("#personal ul")
const contenedorEstudios = document.querySelector("#estudios ul")
const contenedorExperiencia = document.querySelector("#experiencia ul")
const contenedorIdiomas = document.querySelector("#idiomas ul")
const contenedorSkills = document.querySelector("#skills ul")
const contenedorTech = document.querySelector("#tech ul")


console.log("hola mundo")
fetch("cv.json")
.then(resp => resp.json())
.then(data => crearCV(data))

function crearCV(cv){
    const {personal, estudios, experiencia, idiomas, skills, tech} = cv
    const {nombre, fechaNacimiento, ciudad, pais, email} = personal
    contenedorPersonal.innerHTML = `
    <li>${nombre}</li>
    <li>${fechaNacimiento}</li>
    <li>${ciudad}, ${pais}</li>
    <li>${email}</li>
    `
    estudios.forEach((item) =>{
        console.log(item)
        const {titulo, centro , fecha} = item
        contenedorEstudios.innerHTML += `
    <li>${titulo}, ${fecha}</li>
    <li>${centro}</li>
    `
    })

    experiencia.forEach((item) =>{
        const {puesto, empresa, fecha, descripcion} = item
        contenedorExperiencia.innerHTML += `
    <li>${puesto}</li>
    <li>${empresa}</li>
    <li>${fecha}</li>
    <li>${descripcion}</li>
    `
    })

    idiomas.forEach((item) =>{
        const {idioma, nivel, titulo} = item
        contenedorIdiomas.innerHTML += `
    <li>${idioma}</li>
    <li>${nivel}</li>
    <li>${titulo}</li>
    `
    })

    skills.forEach((item) =>{
        const {skill, descripcion} = item
        contenedorSkills.innerHTML += `
    <li>${skill}</li>
    <li>${descripcion}</li>

    `
    })

    tech.forEach((item) =>{
        const {nombre, nivel, logo} = item
        contenedorTech.innerHTML += `
    <li>${nombre}</li>
    <li>${nivel}</li>
    <img src="${logo}" width= 50px, height= 50px>
    `
    })

}