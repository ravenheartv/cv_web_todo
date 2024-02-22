console.log("script.js online")

const containerPersonal = document.querySelector("#personal ul")
const containerEstudios = document.querySelector("#estudios ul")
const containerExperiencia = document.querySelector("#experiencia ul")
const containerIdioma = document.querySelector("#idioma ul")
const containerCompetencia = document.querySelector("#competencia ul")
const containerTech = document.querySelector("#tech ul")


fetch("cv.json")
.then(resp => resp.json())
.then(data => createCV(data))

function createCV(cv){
    console.log(cv)
    const {personal, estudios, experiencia, idioma, competencia, tech } = cv
    const {nombre, fechaDeNacimiento, ciudad, pais, email} = personal
    const {titulo, centro, fechaDeEstudio} = estudios
    const {puesto, curso, fechaDeTrabajo} = experiencia

    containerPersonal.innerHTML = `
    <li>${ nombre }</li>
    <li>${ fechaDeNacimiento }</li>
    <li>${ ciudad }</li>
    <li>${ pais }</li>
    <li>${ email }</li>
    `

    containerEstudios.innerHTML = `
    <li>${ titulo }</li>
    <li>${ centro }</li>
    <li>${ fechaDeEstudio }</li>
    `
    containerExperiencia.innerHTML = `
    <li>${ puesto }</li>
    <li>${ curso }</li>
    <li>${ fechaDeTrabajo }</li>
    `

    idioma.forEach((item)  => {
        const {idioma, nivel} = item
        containerIdioma.innerHTML += `
        <li>${ idioma }</li>
        <li>${ nivel }</li>
        `
    })
    
    competencia.forEach((item)  => {
        const {competencia, descriptor} = item
        containerCompetencia.innerHTML += `
        <li>${ competencia }</li>
        <li>${ descriptor }</li>
        `
    })


    tech.forEach((item)  => {
        const {nombre, nivel,svg} = item
        containerCompetencia.innerHTML += `
        <li>${ nombre }</li>
        <li>${ nivel }</li>
        <img src="${ svg }" alt="">
        `
    })
}