/**Filter */
//Obtienes un nuevo arreglo a partir del filtro aplicado

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado1 = carrito.filter(producto => producto.precio > 400);
console.log(resultado1);

let resultado2 = carrito.filter(producto => producto.nombre !== 'Tablet');
console.log(resultado2);