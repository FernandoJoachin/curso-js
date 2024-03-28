/**Every*/
//Comprueba si todos cumple la condición

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//AND
let resultado1 = carrito.every(producto => producto.precio > 400);
console.log(resultado1);

//OR
let resultado2 = carrito.some(producto => producto.precio > 400);
console.log(resultado2);