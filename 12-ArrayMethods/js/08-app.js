/**Spread Operato */
//Ventajas que tiene es que no modifica el arreglo original

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Con arreglos
const meses2 = [...meses, 'Noviembre']
console.log(meses2);

const meses3 = [...meses, ...'Noviembre']
console.log(meses3);

//Con objetos
const producto = { nombre: 'Xbox', precio:8000 };
const carrito2 = [...carrito, producto];
console.log(carrito2);
