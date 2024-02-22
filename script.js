const contenedorPersonal = document.querySelector("#personal ul");
const contenedorEstudios = document.querySelector("#estudios ul");
const contenedorExperiencia = document.querySelector("#experiencia ul");
const contenedorIdiomas = document.querySelector("#idiomas ul");
const contenedorSkills = document.querySelector("#skills ul");
const contenedorTech = document.querySelector("#tech ul");

fetch("cv.json")
.then(resp => resp.json())
.then(data => crearCV(data));

function crearCV(cv){
    const { personal, estudios, experiencia, idiomas, skills, tech} = cv;
    const { nombre, fechaNacimiento, ciudad, país, email} = personal;
    contenedorPersonal.innerHTML = `
    <h1>Datos personales</h1>
    <li><h3>${nombre}</h3></li>
    <li>${fechaNacimiento}</li>
    <li>${ciudad}, ${país}</li>
    <li>${email}</li>
    `

    estudios.forEach((item) => {
        console.log(item.título, item.centro, item.fecha);
        const { título, centro, fecha} = item;
        contenedorEstudios.innerHTML += `
        <li><h3>${ título }</h3></li>
        <li>${ centro }</li>
        <li>${ fecha }</li>
        `
    });

    experiencia.forEach((item) => {
        console.log(item.puesto, item.empresa, item.duración);
        const { puesto, empresa, duración} = item;
        contenedorExperiencia.innerHTML += `
        <li><h3>${ puesto }</h3></li>
        <li>${ empresa }</li>
        <li>${ duración }</li>
        `
    });

    idiomas.forEach((item) => {
        console.log(item.idioma, item.nivel, item.título);
        const { idioma, nivel, título} = item;
        contenedorIdiomas.innerHTML += `
        <li><h3>${ idioma }</h3></li>
        <li>${ nivel }</li>
        <li>${ título }</li>
        `
    });

    skills.forEach((item) => {
        console.log(item.skill, item.descripción);
        const { skill, descripción} = item;
        contenedorSkills.innerHTML += `
        <li>${ skill }</li>
        <li>${ descripción }</li>
        `
    });

    tech.forEach((item) => {
        console.log(item.nombre, item.nivel, item.svg);
        const { nombre, nivel, svg} = item;
        contenedorTech.innerHTML += `
        <li>${ nombre }, ${ nivel }</li>
        <li><img src=${ svg }></li>
        `
    });
}