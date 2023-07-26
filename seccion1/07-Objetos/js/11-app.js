/*Acceder a valores de un objeto (this) y funciones */
const producto = {
    nombre: "Monitor curvo",
    precio: 1000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de $${this.precio}`);
    }
}

producto.mostrarInfo();