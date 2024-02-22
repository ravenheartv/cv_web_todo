const contenedorPersonal = document.querySelector("#personal ul")
const contenedorEstudios = document.querySelector("#estudios ul")
const contenedorExperiencias = document.querySelector("#experiencia ul")
const contenedorIdiomas = document.querySelector("#idiomas ul")
const contenedorSkills = document.querySelector("#skills ul")
const contenedorTech = document.querySelector("#tech ul")

fetch("cv.json")
.then(resp => resp.json())
.then(data => crearCV(data))




function crearCV(cv){
    //console.log(cv.Experiencia[0].Puesto)
    const{personal, Estudios, Experiencia, idiomas,Skills, tech} = cv;
    const { Nombre, Fecha_De_Nacimiento, Pais, Ciudad, Email} = personal;
    console.log(contenedorPersonal)
    contenedorPersonal.innerHTML = `
    <li>${Nombre}</li> 
    <li> ${Fecha_De_Nacimiento}</li>
    <li> ${Pais}, ${Ciudad}</li>
    <li> ${Email}</li>`

    Estudios.forEach((item) => {
        const {Titulo, Centro, Fecha} = item
        contenedorEstudios.innerHTML += `<li>${Titulo}</li>
        <li>${Centro}</li> 
        <li>${Fecha}</li>`
    })

    Experiencia.forEach((item) => {
        const {Puesto, Empresa, Fecha, Descripcion} = item
        contenedorExperiencias.innerHTML += `<li>${Puesto}</li>
        <li>${Empresa}</li> 
        <li>${Fecha}</li>
        <li>${Descripcion}</li>`
    })
    
    idiomas.forEach((item) => {
        const {Idioma, Nivel} = item
        contenedorIdiomas.innerHTML += `<li>${Idioma}</li>
        <li>${Nivel}</li> 
        `
    })

    Skills.forEach((item) => {
        const {Skills, Descripcion} = item
        contenedorSkills.innerHTML += `<li>${Skills}</li>
        <li>${Descripcion}</li> 
        `
    })

    tech.forEach((item) => {
        const {Nombre, Nivel, svg} = item
        contenedorTech.innerHTML += `<li>${Nombre}</li>
        <li>${Nivel}</li> 
        <li><img src="${svg}" alt="${Nombre} width="50" height="50"></li>`
    })

}