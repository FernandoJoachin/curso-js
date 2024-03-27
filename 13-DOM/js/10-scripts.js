/**Generar HTML con JavaScript*/
//Crear elemento
const enlace = document.createElement('a');
enlace.textContent = 'Contacto';
enlace.href = '/nuevo-enlace';
enlace.setAttribute('data-enlace', 'nuevo-enlace');

//Agregar el elemento, existen dos formas:
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace); //Inserta al final
navegacion.insertBefore(enlace, navegacion.children[2]);//Te permite decidir donde agregarlo


/**Construir una card*/

//Crear la información
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//Crear un div con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

//Crear una imagen
const img = document.createElement('img');
img.src = 'img/hacer2.jpg';

//Crear una card
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(img);

//Asignar la info
card.appendChild(info);

//Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);

console.log(card);