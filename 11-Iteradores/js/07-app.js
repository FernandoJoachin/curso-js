/**For of */
const carrito = [
    {nombre: "Televisor", precio: 1000},
    {nombre: "Celular", precio: 500},
    {nombre: "Tablet", precio: 800},
    {nombre: "Reloj", precio: 300},
]

for(let articulo of carrito){
    console.log(articulo.nombre);
}