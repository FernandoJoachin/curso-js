/** Consultar un JSON */
const cargarJSONBtn = document.getElementById('cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleado.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostratHTML(datos))
        .catch(error => console.log(error))
}

function mostratHTML({id, empresa, nombre, trabajo}){
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `
}