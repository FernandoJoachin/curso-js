/**Sets */
/* Es una estructura de datos que permite almacenar colecciones de valores únicos, lo que significa que cada valor puede aparecer solo una vez dentro de un set */

const carrito = new Set();
carrito.add('Televesion');
carrito.add('Xbox');

console.log(carrito);
carrito.clear();
console.log(carrito);

carrito.add('Televesion');
carrito.add('Xbox');
carrito.delete('Television')//Si no lo encuentra devuelve False
carrito.add('PlayStation');
carrito.add('NintendoSwitch');
console.log(carrito.size);
console.log(carrito.has('Xbox'));

carrito.forEach(producto => console.log(producto));

//Utilidad práctica de los sets
const numeros = [10,20,60,20,5,100,20,435,56,20];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);