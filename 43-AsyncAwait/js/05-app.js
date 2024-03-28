/**Async Await hacia una API con Fetch */
const url = 'https://picsum.photos/list'
document.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos(){
    fetch(url) 
        .then(respuesta => respuesta.json())
        .the(respuesta => console.log(respuesta))
        .catch(error => console.log(error))
}
 
async function obtenerDatos(){
    try {
        const resultado = await fetch(url);
        const respuesta = await resultado.json();
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}