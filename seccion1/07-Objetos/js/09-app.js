"use strict";
const producto = {
    nombre: "Monitor curvo",
    precio: 1000,
    disponible: true
}
//Sellar un objeto
Object.seal(producto);

producto.disponible = false; //Si lo permite
/*No permite lo siguiente*/
//producto.imagen = "imagen.jp";
// delete producto.precio;
console.log(producto);
console.log(Object.isSealed(producto));