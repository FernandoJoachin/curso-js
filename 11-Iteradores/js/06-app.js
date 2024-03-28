/**ForEach */
const carrito = [
    {nombre: "Televisor", precio: 1000},
    {nombre: "Celular", precio: 500},
    {nombre: "Tablet", precio: 800},
    {nombre: "Reloj", precio: 300},
]

carrito.forEach((articulo, index) => {console.log(`El artículo ${index} es ${articulo.nombre}`)});

//Diferencia entre forEach y Map
const resultado1 = carrito.forEach((articulo, index) => {articulo.nombre});
console.log(resultado1); //No devuelve nada
const resultado2 = carrito.map((articulo, index) => {articulo.nombre});
console.log(resultado2); //Devuelve una copia del arreglo