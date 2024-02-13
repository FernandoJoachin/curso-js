const carrito = [];

const producto = {
    nombre: "Monitor curvo",
    precio: 1000
}

const producto2 = {
    nombre: "Tablet ",
    precio: 800
}

const producto3 = {
    nombre: "Celular ",
    precio: 500
}

const producto4 = {
    nombre: "Audifonos ",
    precio: 200
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);
console.table(carrito)

//Pop es un método que elimina al final del arreglo
carrito.pop(producto)
console.table(carrito)

//Shit es un método que elimina al principio del arreglo
carrito.shift(producto2)
console.table(carrito)

//Splice es un método que elimina dado un rango
carrito.push(producto);
carrito.push(producto2);
console.table(carrito)
carrito.splice(1,2)
console.table(carrito)