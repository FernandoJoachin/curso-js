/**Eventos con el Mouse*/

const nav = document.querySelector('.navegacion');

nav.addEventListener('click', () => {
    console.log('Click a la navegación');
});

nav.addEventListener('dblclick', () => {
    console.log('Doble click a la navegación');
});

nav.addEventListener('mouseout', () => {
    console.log('Saliendo a la navegación');
});

nav.addEventListener('mouseenter', () => {
    console.log('Entrando Click a la navegación');
})


//Se activa cuando un botón del mouse se presiona mientras el cursor está sobre un elemento.
nav.addEventListener('mousedown', () => {
    console.log('Mousedown a la navegación');
})

//Este evento se activa cuando se suelta un botón del mouse que ha sido previamente presionado
nav.addEventListener('mouseup', () => {
    console.log('Mouseup a la navegación');
})