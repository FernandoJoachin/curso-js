const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si existe un elemento en un arreglo con forEach
meses.forEach(mes => {
    if(mes === 'Enero'){
        console.log('Si existe Enero');
    }
});

//Comprobar si existe un elemento en un arreglo .some y .include
const resultado1 = meses.includes('Febrero');
console.log(resultado1);

const resultado2 = meses.some(mes => mes ===  'Febrero');
console.log(resultado2);

//Comprobar si existe un elemento en un arreglo de objetos
const resultado3 = carrito.some(producto => producto.nombre === 'Tablet');
console.log(resultado3); 