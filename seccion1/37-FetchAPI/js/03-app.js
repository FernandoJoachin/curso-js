/**Consultar e Imprimir los Resultados de un Fetch */
const cargarJSONArrayBtn = document.getElementById('cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleados.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostratHTML(datos))
        .catch(error => console.log(error))
}

function mostratHTML(empleados){
    const contenido = document.querySelector('.contenido');
    let html = '';
    empleados.forEach(empleado => {
        const {id, empresa, nombre, trabajo} = empleado;
        html += `
        <p>Empleado: ${nombre}</p>
        <p>ID: ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        <br>
    `
    });
    contenido.innerHTML = html;
}