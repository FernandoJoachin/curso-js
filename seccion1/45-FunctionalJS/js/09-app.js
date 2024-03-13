/**Partials y Currying */

/* Un "partial" (parcial) es una función que se crea a partir de una función existente al predefinir algunos de sus argumentos. Esto significa que toma una función y algunos de los argumentos para esa función, y produce una nueva función que espera los argumentos restantes. */

/* Currying es una técnica en la que una función de múltiples argumentos se convierte en una secuencia de funciones que toman un solo argumento. Es decir, en lugar de aceptar todos los argumentos de una vez, la función curried toma el primer argumento y devuelve una función que espera el siguiente argumento, y así sucesivamente, hasta que se proporcionan todos los argumentos. */

const suma = (a,b,c) => a + b + c;
const parcial = a => b => c => suma(a,b,c);
const resultadoParcial = parcial(5)(3)(2);
console.log(resultadoParcial);