/** Local Storage */

/* localStorage es un objeto de almacenamiento web en JavaScript que permite a las aplicaciones web almacenar pares de clave-valor en un navegador web sin una fecha de vencimiento. Mientras que los datos almacenados en localStorage persisten incluso después de cerrar y reabrir el navegador, los datos almacenados en sessionStorage solo persisten durante la duración de la sesión del navegador */

//Agregar elementos al Local Storage (solo almacena string)
const producto = {
    nombre: 'Xbox Series X',
    precio: 5000
}
const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);