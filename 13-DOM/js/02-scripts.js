/** GetElementsByClassName */
/* Sirve para hallar elementos en el HTML a través de su clase */

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//Si las clases existen más de 1
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//Si no existe la clase solicitada
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste); //Devuelve HTMLCollection vacio que es como un arreglo