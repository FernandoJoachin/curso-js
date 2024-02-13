/** Arrow Functions en un forEach y un map */
const carrito = [
    {nombre: "Televisor", precio: 1000},
    {nombre: "Celular", precio: 500},
    {nombre: "Tablet", precio: 800},
    {nombre: "Reloj", precio: 300},
]

const nuevoArreglo = carrito.map(producto => `${producto.nombre} - Precio: $${producto.precio}`);
carrito.forEach(producto => console.log(`${producto.nombre} - Precio: $${producto.precio}`))

console.log(nuevoArreglo);