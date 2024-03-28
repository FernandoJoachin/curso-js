/** ¿Qué es Try Catch? */
/* Es una estructura utilizada para manejar errores en el código. Permite controlar el flujo del programa cuando ocurre un error durante la ejecución del código dentro del bloque try */
console.log(1+1);

try {
    autenticar();
} catch (error) {
    console.log(error);
}

console.log(2+3);