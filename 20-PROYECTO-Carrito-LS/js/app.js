//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listarCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

document.addEventListener('DOMContentLoaded', () => {
    listarCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', eliminarCurso);
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    imprimirCarritoHTML();
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        imprimirCarritoHTML();
    });
})

//Funciones
function agregarCurso(event){
    event.preventDefault();
    if(event.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = event.target.parentElement.parentElement;
        leerDatosCursos(cursoSeleccionado);
    }
}

function eliminarCurso(event){
    if(event.target.classList.contains('borrar-curso')){
        const cursoID = event.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID);
        imprimirCarritoHTML();
    }
}

function leerDatosCursos(curso){
    const infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        cantidad: 1
    }

    const indice = articulosCarrito.findIndex(curso => curso.id === infoCurso.id);
    if(indice !== -1){
        const copiaArticulosCarrito = articulosCarrito;
        copiaArticulosCarrito[indice].cantidad++;
        articulosCarrito = [...copiaArticulosCarrito];
    }else{
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    imprimirCarritoHTML();
}

function imprimirCarritoHTML(){
    limpiarHTML();

    articulosCarrito.forEach(curso => {
        const {id, imagen, titulo, precio, cantidad} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" alt="Imagen carrito" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `;
        contenedorCarrito.appendChild(row);
    });

    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function limpiarHTML(){
    //Forma lenta
    //contenedorCarrito.innerHTML = '';

    //Forma optima
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}