/**Hoisting */
/* Hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones son movidas al inicio de su ámbito (alcance) durante la fase de compilación, antes de que se ejecute el código. Esto significa que, aunque puedas usar una variable o función antes de que se declare explícitamente en el código, en realidad la declaración se ha movido al principio de su alcance. */

iniciarSesion();
function iniciarSesion(nombre){
    console.log(`Bienvenido ${nombre}`);    
}

iniciarSesion2();
const iniciarSesion2 = nombre => {
    console.log(`Bienvenido de nuevo ${nombre}`);    
}