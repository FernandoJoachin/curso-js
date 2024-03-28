/**Coerción */
/* La coerción es el proceso en el que JavaScript convierte automáticamente los valores de un tipo de datos a otro durante la evaluación de expresiones. Esto puede ocurrir de forma implícita (automáticamente por el motor de JavaScript) o de forma explícita (mediante operaciones específicas). */

const numero1 = 20;
const numero2 = '20';

console.log(numero1 + numero2); //Implicita
console.log(Number(numero2)); //Explicita
console.log(numero1.toString());

const pedido = [1,2,3,4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));