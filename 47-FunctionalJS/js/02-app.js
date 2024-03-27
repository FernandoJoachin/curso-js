/**Funciones como Argumentos */
const suma = (a,b) => a + b;
const multiplicar = (a,b) => a * b;
const SumaOMultiplicar = fn => fn(10,20);

console.log(SumaOMultiplicar(suma));
console.log(SumaOMultiplicar(multiplicar));