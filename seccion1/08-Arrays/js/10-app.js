const carrito = [
    {nombre: "Televisor", precio: 1000},
    {nombre: "Celular", precio: 500},
    {nombre: "Tablet", precio: 800},
    {nombre: "Reloj", precio: 300},
]

/*Map*/
const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre} - Precio: $${producto.precio}`;
})
console.log(nuevoArreglo);
//NOTA: A diferencia del forEach, Map crea un copia del arreglo