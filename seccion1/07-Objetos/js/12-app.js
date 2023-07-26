//Object Literal
const producto = {
    nombre: "Monitor curvo",
    precio: 1000,
    disponible: true,
}
console.log(producto);

//Object Constructor
function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Tablet", 800);
console.log(producto2);