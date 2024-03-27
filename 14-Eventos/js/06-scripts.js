/**Event Bubbling */
/* Describe el comportamiento de propagación de eventos a través de la jerarquía de elementos en una página web */

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (event) => {
    console.log('click card');
});

infoDiv.addEventListener('click', (event) => {
    console.log('click info');
});

titulo.addEventListener('click', (event) => {
    event.stopPropagation(); // Detiene la propagación de un evento a través de la jerarquía de elementos en el DOM
    console.log('click titulo');
});