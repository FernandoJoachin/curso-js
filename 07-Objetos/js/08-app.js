"use strict";
const producto = {
    nombre: "Monitor curvo",
    precio: 1000,
    disponible: true
}
//Congelar un objeto para no poder modificarlo
Object.freeze(producto);

/*No permite lo siguiente*/
//producto.disponible = false;
//producto.imagen = "imagen.jp";
// delete producto.precio;
console.log(producto);
console.log(Object.isFrozen(producto));