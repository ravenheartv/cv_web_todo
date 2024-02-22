const contenedorPersonal= document.querySelector("#personal ul")
const contenedorEstudios= document.querySelector("#estudios ul")
const contenedorExperiencia= document.querySelector("#experiencia ul")
const contenedorIdiomas= document.querySelector("#idiomas ul")
const contenedorSkills= document.querySelector("#skills ul")
const contenedorTech= document.querySelector("#tech ul")




fetch("cv.json")
  .then(response => response.json())
  .then(data => crearCV(data)); 
  
  function crearCV(cv){
    const {personal, estudios, experiencia, idiomas, skills, tech}= cv
    const {nombre, fechaNacimiento, ciudad, pais, email} = personal

    contenedorPersonal.innerHTML = `<li> Nombre: ${nombre}</li>
    <li>Fecha de Nacimiento: ${fechaNacimiento}</li>
    <li>Ciudad: ${ciudad}</li>
    <li>País: ${pais}</li>
    <li>Email: ${email}</li>`

    estudios.forEach(estudio => {
        const { titulo, centro, fecha } = estudio;
        contenedorEstudios.innerHTML += `
          <li>Título: ${titulo}</li>
          <li>Centro: ${centro}</li>
          <li>Fecha: ${fecha}</li>
        `;
      });
      experiencia.forEach(exp => {
        const { puesto, empresa, fecha, descripcion } = exp;
        contenedorExperiencia.innerHTML += `
          <li>Puesto: ${puesto}</li>
          <li>Empresa: ${empresa}</li>
          <li>Fecha: ${fecha}</li>
          <li>Descripción: ${descripcion}</li>
        `;
      });

      idiomas.forEach(idioma => {
        const { idioma: nombreIdioma, nivel, titulo } = idioma;
        contenedorIdiomas.innerHTML += `
          <li>Idioma: ${nombreIdioma}</li>
          <li>Nivel: ${nivel}</li>
          <li>Título: ${titulo}</li>` 
        ;
      });

      skills.forEach(skill => {
        const { skill: nombreSkill, descripcion } = skill;
        contenedorSkills.innerHTML += `
          <li>Skill: ${nombreSkill}</li>
          <li>Descripción: ${descripcion}</li>
        `;
      });

      tech.forEach(tech => {
        const { nombre, nivel, svg } = tech;
        contenedorTech.innerHTML += `
          <li>Nombre: ${nombre}</li>
          <li>Nivel: ${nivel}</li>
          <li><img src="${svg}" alt="${nombre} width="50" height="50"></li>
        `;
      });

  }