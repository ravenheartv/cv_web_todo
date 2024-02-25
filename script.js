const contenedorPersonal = document.querySelector("#personal ul");
const contenedorEstudios = document.querySelector("#estudios ul");
const contenedorExperiencia = document.querySelector("#experiencia ul");
const contenedorIdiomas = document.querySelector("#idiomas ul");
const contenedorSkills = document.querySelector("#skills ul");
const contenedorTech = document.querySelector("#tech ul");
const contenedorIndustria = document.querySelector("#industria");
const contenedorProyectos = document.querySelector("#proyectos ul");

const messyTexts = new MessManager('.titulo_seccion');
messyTexts.setMessDelay(50)
messyTexts.setFixDelay(100)
messyTexts.setIdleTime(1000)
messyTexts.mess()

fetch("/cv.json")
.then(response => response.json())
.then(data => crearCV(data));

function crearCV(cv){
    const { 
        personal, 
        estudios, 
        experiencia, 
        idiomas, 
        skills, 
        tech, 
        industrial, 
        proyectos 
    } = cv

    // Informacion personal
    contenedorPersonal.innerHTML = `
    <li><h2 class="titulo_seccion">${personal.nombre}</h2></li>
    <li>${personal.fechaNacimiento}</li>
    <li>${personal.email}</li>
    <li>${personal.ciudad}, ${personal.pais}</li>
    `

    // Estudios
    estudios.forEach(item => {
        const { titulo, centro, fecha } = item
        contenedorEstudios.innerHTML += `
        <li><h2> <strong>${titulo}</strong></h2></li>
        <li><h3>${fecha}</h3></li>
        <li> ${centro}</li>
        `
    });

    // Experiencia

    experiencia.forEach(item => {
        const { puesto, empresa, fecha, descripcion } = item
        contenedorExperiencia.innerHTML += `
        <li><h2> <strong>${puesto}</strong></h2></li>
        <li><h3> ${fecha} </h3></li>
        <li> ${empresa}</li>
        <li> ${descripcion}</li>
        `
    });

    // Idiomas
    idiomas.forEach(item => {
        const { idioma, nivel } = item
        contenedorIdiomas.innerHTML += `
        <li><h2> <strong>${idioma}</strong></h2></li>
        <li> ${nivel}</li>
        `
    });

    // Skills
    skills.forEach(item => {
        const {skill, descripcion} = item
        contenedorSkills.innerHTML += `
        <li><h3> <strong>${skill}</strong> </h3></li>
        <li> ${descripcion}</li>
        `
    });

    // Tech
    tech.forEach(item => {
        const {nombre, descripcion, svg} = item
        contenedorTech.innerHTML += `
        <img src="${svg}">
        `
    });

    // Proyectos
    proyectos.forEach(item => {
        const {nombre, descripcion, url} = item
        contenedorProyectos.innerHTML += `
        <li> <a href="${url}"><h2> <strong>${nombre}</strong></h2></a></li>
        
        <li> ${descripcion}</li>
        `
    });

    // Industria

    industrial.forEach(item => {
        console.log(item)
        const { svg } = item
        contenedorIndustria.innerHTML += `
        <img src="${svg}">
        `
    });
}