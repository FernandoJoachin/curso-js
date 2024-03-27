/**Prototypes*/
/**En JavaScript, los prototipos son un mecanismo fundamental que permite la herencia y la compartición de propiedades y métodos entre objetos. Todos los objetos en JavaScript tienen un prototipo, que es un objeto del cual heredan propiedades y métodos. */

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