/**QuerySelector*/
/* Permite seleccionar un elemento del DOM utilizando un selector CSS.
Solamente trae el primer elemento que coincida */

const card = document.querySelector('.card');
console.log(card);

//Tener selectores especificos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

//Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('.hospedaje .card:nth-child(3)');
console.log(segundoCard);

//Seleccionar un elemento por su ID
const form = document.querySelector('#formulario');
console.log(form);

//Seleccionar elementos HTML
const nav = document.querySelector('nav');
console.log(nav);

//Selecionar un elemento que no existe
const noExiste = document.querySelector('no-existe');
console.log(noExiste); //Devuelve null