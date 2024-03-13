/** .map utilizado en Functional JS */
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];
//Alternativa de usar el map como normalmente se utiliza
const obtenerNombres = producto => {
    return producto.nombre;
}
const resultado = carrito.map(obtenerNombres);
console.log(resultado);
