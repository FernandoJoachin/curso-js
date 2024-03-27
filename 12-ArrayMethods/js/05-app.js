/**Find */
//Busca un elemento en un arreglo
//Solo devuelve el primer elemento que encuentre

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//ForEach
let resultado1 = ''
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Audifonos' ){
        resultado1 = carrito[index];
    }
})
console.log(resultado1);

//Find
let resultado2 = carrito.find(producto => producto.nombre === 'Audifonos');
console.log(resultado2);