/** GetElementById */
/* Sirve para hallar elementos en el HTML a través de su ID. Solamente trae
el primero que encuentre. */

const form = document.getElementById('formulario');
console.log(form);

//Si no existe el id solicitada
const noExiste = document.getElementById('no-existe');
console.log(noExiste); //Devuelve null