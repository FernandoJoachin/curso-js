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

//Destructuring
const {nombre,informacion,informacion:{medidas, medidas:{peso}}} = producto;
console.log(nombre);
console.log(informacion);
console.log(medidas);
console.log(peso);