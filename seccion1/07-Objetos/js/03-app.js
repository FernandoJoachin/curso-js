const producto = {
    nombre: "Monitor curvo",
    precio: 1000,
    disponible: true
}
console.log(producto);

//Agregar nuevos atributos a un objeto
producto.imagen = "imagen.jpg";
console.log(producto);

//Eliminar atributos a un objeto
delete producto.disponible;
console.log(producto);

