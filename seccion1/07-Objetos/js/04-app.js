const producto = {
    nombre: "Monitor curvo",
    precio: 1000,
    disponible: true
}

const nombreProducto = producto.nombre;
console.log(nombreProducto);

//Destructuring
const {nombre,precio,disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);