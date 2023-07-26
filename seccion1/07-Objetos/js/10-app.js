const producto = {
    nombre: "Monitor curvo",
    precio: 1000,
    disponible: true,
}
console.log(producto);

const medidas = {
    peso: "1kg",
    medida: "1m"
}
console.log(medidas);

/*Formas de copiar dos objetos*/
const resultado = Object.assign(producto,medidas);
console.log(resultado);

const resultado2 = {...producto, ...medidas}; //Spread Operator o Rest Operator
console.log(resultado2);