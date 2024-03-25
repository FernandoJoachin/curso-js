/**Self */
/* En JavaScript, self es una referencia especial que apunta al objeto global en un entorno de navegador (como window), o al objeto global en Node.js (como global). Es una forma de referirse al contexto global actual dentro de una función o bloque de código. */

//En vez de poner window.onload
self.onload = () => {
    console.log('Ventana Lista');
}

window.nombre = 'Xbox'
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function(){
        return `El producto: ${self.nombre}`;
    }
}
console.log(producto.mostrarInfo());