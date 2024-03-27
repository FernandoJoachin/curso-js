/**FindIndex */
//Solo devuelve el primer elemento que encuentre
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar el índice de elemento en un arreglo con forEach
meses.forEach((mes, index) => {
    if(mes === 'Mayo'){
        console.log(`El index de mayo es ${index}`);
    }
});

//Comprobar el índice de elemento en un arreglo con findIndex
const index1 = meses.findIndex(mes => mes === 'Mayo'); 
console.log(index1);

//Comprobar el índice de elemento en un arreglo de objetos con findIndex
const index2 = carrito.findIndex(producto => producto.nombre === 'Teclado');
console.log(index2);