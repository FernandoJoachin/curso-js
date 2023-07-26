const carrito = [null];

const producto = {
    nombre: "Monitor curvo",
    precio: 1000
}

const producto2 = {
    nombre: "Tablet ",
    precio: 800
}

//Push es un método que agrega al final del arreglo
carrito.push(producto);
console.table(carrito);

//Unshit es un método que agrega al principio del arreglo
carrito.unshift(producto2);
console.table(carrito);