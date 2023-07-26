const producto = {
    nombre: "Monitor curvo",
    precio: 1000,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion: {
            pais: "Mexico"
        }
    }
}

console.log(producto.informacion.fabricacion.pais);
console.log(producto.informacion.medidas.peso);