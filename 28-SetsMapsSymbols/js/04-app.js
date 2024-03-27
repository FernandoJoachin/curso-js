/**Weakmap */
/* Ss una estructura de datos similar a un 'map', pero con algunas diferencias importantes en su comportamiento y uso, como por ejemplo: las claves en un WeakMap deben ser objetos, no es iterable y no permite operaciones como size o clear. */

const producto = {
    idProducto: 11
}

const weakMap = new WeakMap()
weakMap.set(producto, 'Xbox');
console.log(weakMap.has(producto));
console.log(weakMap.get(producto));
console.log(weakMap);
console.log(weakMap.delete(producto));
console.log(weakMap);