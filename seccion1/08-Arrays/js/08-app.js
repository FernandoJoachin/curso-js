const producto = {
    nombre: "Monitor curvo",
    precio: 1000,
    disponible: true
}

//Destructuring
const {nombre,precio,disponible} = producto;


/*Destructuring en arreglos*/
const arreglo = [10,20,30,40,50];
const [primero] = arreglo;
console.log(primero);

const [, , tecero] = arreglo;
console.log(tecero);

const [,segundo,,...cuarto] = arreglo;
console.log(cuarto);
