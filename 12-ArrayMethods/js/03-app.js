/**Reduce */
//Se utiliza para "reducir" un arreglo a un solo valor

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//con foreach
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);

//con reduce (primero se escribe el acumulador, luego el valor actual)
let resultado = carrito.reduce((total, producto) => total + producto.precio, 100); //Se puede especificar con cuanto comienza
console.log(resultado)