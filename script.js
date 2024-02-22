const contenedorPersonal = document.querySelector("#personal ul");
const contenedorEstudios = document.querySelector("#estudios ul");
const contenedorExperiencia = document.querySelector("#experiencia ul");
const contenedorIdiomas = document.querySelector("#idiomas ul");
const contenedorSkill = document.querySelector("#skills ul");
const contenedorTech = document.querySelector("#tech ul");

fetch("cv.json")
.then(resp => resp.json())
.then(data => crearCV(data))

function crearCV(cv){
    //console.log(cv.experiencia[0].puesto)
    const {personal, estudios, experiencia, idiomas, skills, tech}  = cv;

    const { nombre, fechaNacimiento, ciudad, pais, email}  = personal;
    contenedorPersonal.innerHTML = 
    `<li>${nombre}</li>
     <li>${fechaNacimiento}</li>
     <li>${ciudad}, ${pais}</li>
     <li>${email}</li>`


        estudios.forEach((item) => {
        console.log(item.titulo, item.centro, item.fecha)
        const { titulo, centro, fecha}  =  item;

        contenedorEstudios.innerHTML +=
        `<li>${titulo}, ${fecha}</li>
        <li>${centro}</li>`
        });

        experiencia.forEach((item) => {
        console.log(item.puesto, item.empresa, item.fecha, item.descripcion)
        const { puesto, empresa, fecha, descripcion}  =  item;

        contenedorExperiencia.innerHTML +=
        `<li>${puesto}</li> 
        <li>S${empresa}</li>
        <li>${fecha}</li>
        <li>${descripcion}</li>
        `
    });

        idiomas.forEach((item) => {
        console.log(item.idioma, item.nivel,)
        const { idioma, nivel}  =  item;

        contenedorIdiomas.innerHTML +=
        `<li>${idioma}</li>
        <li>${nivel}</li>`
    });

        skills.forEach((item) => {
        console.log(item.skill, item.descripcion)
        const { skill, descripcion}  =  item;

        contenedorSkill.innerHTML +=
        `<li>${skill}</li>
        <li>${descripcion}</li>`
    });

        tech.forEach((item) => {
        console.log(item.nombre, item.nivel, item.svg)
        const { nombre, nivel, svg}  =  item;

        contenedorTech.innerHTML +=
        `<li>${nombre}</li>
        <li>${nivel}</li>
        <li><img src= "${svg}" alt ="${nombre} width="50" height="50"></li>`
        
     });
    // contenedorPersonal.innerHTML = 
    // `<li>${titulo}</li>
    //  <li>${centro}</li>
    //  <li>${fecha}</li>`

    // const { puesto, empresa, fecha, descripcion} = experiencia;
    // contenedorPersonal.innerHTML = 
    // `<li>${puesto}</li>
    //  <li>${empresa}</li>
    //  <li>${fecha}</li>
    //  <li>${descripcion}</li>`

    // const { idioma, nivel } = idiomas
    // const { skill, descripcion}
    // const { nombre, nivel, svg}
    
}