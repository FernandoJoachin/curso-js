/**HOISTING**/
/* El hoisting (elevación) es un comportamiento en JavaScript donde las declaraciones de variables y funciones son movidas al comienzo de su ámbito o contexto de ejecución durante la fase de compilación, antes de que se ejecute el código. Esto significa que puedes utilizar variables y funciones en tu código antes de declararlas explícitamente. */

//Tiene como dos etapas, creación (revisar variables y funciones) 
//y luego la de ejecución

console.log(x); // undefined
var x = 5;

/*Declaración de funcion (Function Declaration)*/
sumar1(); //Si funciona
function sumar1(){
    console.log(2+2);
}
/*Expresión de funcion (Function Expression)*/
sumar2() //No funciona
sumar2 = function () {
    console.log(3+3);
} 

