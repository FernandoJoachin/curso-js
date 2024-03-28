/** Consultar e Imprimir los Resultados de una API */
const cargarAPIBtn = document.getElementById('cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostratHTML(datos))
        .catch(error => console.log(error))
}

function mostratHTML(datos){
    const contenido = document.querySelector('.contenido');
    let html = '';
    datos.forEach(perfil => {
        const {author, post_url} = perfil;
        html += `
        <p>Autor: ${author}</p>
        <a href="${post_url}" target="_blank">Ver Imagen</a>
        <br>
    `
    });
    contenido.innerHTML = html;
}