/**Variable Document */
/* Hace referencia al objeto Document, que representa el HTML o XML de la página web cargada en el navegador. Este objeto proporciona métodos y propiedades que permiten interactuar con los elementos de la página */
let elementosHTML;
elementosHTML = document;
elementosHTML = document.head;
elementosHTML = document.body;
elementosHTML = document.domain;
elementosHTML = document.forms;
elementosHTML = document.forms[0];
elementosHTML = document.forms[0].id;
elementosHTML = document.forms[0].method;
elementosHTML = document.forms[0].classList;
elementosHTML = document.forms[0].action;

elementosHTML = document.links;
elementosHTML = document.links[4];
elementosHTML = document.links[4].classList;
elementosHTML = document.links[4].className; //Te lo devuelve como un string

elementosHTML = document.images;
elementosHTML = document.scripts;

console.log(elementosHTML);