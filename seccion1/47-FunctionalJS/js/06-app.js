/**Pure Functions */
/* Las funciones puras, también conocidas como funciones sin efectos secundarios, son funciones en las que el resultado de la llamada depende únicamente de sus argumentos y no de ningún estado o variable global externa. Esto significa que una función pura no modifica ningún estado fuera de su ámbito local, y tampoco tiene efectos colaterales, como la mutación de variables externas, la escritura en archivos, la impresión en la consola, entre otros. */

const numero1 = 20;
const duplicar = numero => numero * 2;

const resultado = duplicar(numero1);
console.log(resultado);
console.log(numero1);