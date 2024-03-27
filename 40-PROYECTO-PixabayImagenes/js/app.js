const resultado = document.getElementById('resultado');
const formulario = document.getElementById('formulario');
const paginacionDiv = document.getElementById('paginacion');
const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(event){
    event.preventDefault();
    const terminoBusqueda = document.getElementById('termino').value;
    if(terminoBusqueda === ''){
        mostrarAlerta('Agrega un término de búsqueda');
        return;
    }

    buscarImagenes();
}

function mostrarAlerta(mensaje){
    const existeAlerta = document.querySelector('.alerta'); 
    if(!existeAlerta){
        const alerta = document.createElement('P');
        alerta.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "max-w-lg", "mx-auto", "mt-6", "text-center", 'alerta' );
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;

        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove()
        }, 3000);
    }
}

function buscarImagenes(){    
    const terminoBusqueda = document.getElementById('termino').value;
    const apiKey = '42741032-c8008d9925176aa7e312b0af2';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${terminoBusqueda}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url) 
        .then(respuesta => respuesta.json())
        .then( resultado => {
            totalPaginas = calcularPaginas(resultado.totalHits);
            mostrarImagenes(resultado.hits);
        });
}

function *crearPaginacion(total){
    for( let i = 1; i <= total; i++){
        yield i;
    }
}

function mostrarImagenes(imagenes){
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    imagenes.forEach(imagen => {
        const {previewURL, likes, views, largeImageURL} = imagen;
        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 mb-4 p-3">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">
                    <div class="p-4">
                        <p class="font-bold">&#10084; ${likes}<span class="font-light"> Me gusta</span></p>
                        <p class="font-bold">&#128064; ${views}<span class="font-light"> Veces vista</span></p>
                        <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1" href=${largeImageURL} rel="noopener noreferrer" target="_blank">Ver imagen</a>
                    </div>
                </div>
            </div>
        `;
    });

    while(paginacionDiv.firstChild) {
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }
    imprimirPaginador();
}

function calcularPaginas(total){
    return parseInt(Math.ceil(total / registrosPorPagina));
}

function imprimirPaginador(){
    iterador = crearPaginacion(totalPaginas);
    while(true){
        const {value, done} = iterador.next();
        if(done) return;

        const boton = document.createElement('A');
        boton.href = "#";
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'rounded');
        boton.onclick = () => {
            paginaActual = value;
            buscarImagenes();
        }

        paginacionDiv.appendChild(boton);
    }

}