/**Generadores Javascript */
function *crearGenerador(){
    yield 1;
    yield 'Fer';
    yield 5+5;
}

const generador = crearGenerador();
console.log(generador);
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());

console.log('');

function *generadorCarrito(carrito){
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i];
    }
}

const carrito = ['Producto1', 'Producto2', 'Producto3'];
const generador2 = generadorCarrito(carrito);
console.log(generador2.next());
console.log(generador2.next());
console.log(generador2.next());
console.log(generador2.next());