const carrito = [];

const producto = {
    nombre: "Monitor curvo",
    precio: 1000
}

const producto2 = {
    nombre: "Tablet ",
    precio: 800
}

const producto3 = {
    nombre: "Celular ",
    precio: 500
}

//Agregar nuevos elementos con spread operator
let resultado;
resultado = [...carrito,producto];
console.table(resultado);
resultado = [...resultado,producto2];
console.table(resultado);
resultado = [producto3,...resultado];
console.table(resultado);

console.log(carrito);