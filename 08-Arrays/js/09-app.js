const carrito = [
    {nombre: "Televisor", precio: 1000},
    {nombre: "Celular", precio: 500},
    {nombre: "Tablet", precio: 800},
    {nombre: "Reloj", precio: 300},
]

for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: $${carrito[i].precio}`);
}
console.log("/");
/*ForEach*/
carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: $${producto.precio}`);
})