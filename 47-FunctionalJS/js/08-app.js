/**Closures */
/* Un cierre (closure en inglés) es una función que "recuerda" el entorno en el que fue creada, incluidas las variables locales y parámetros de la función exterior en la que se definió. Esto significa que una función cierre tiene acceso tanto a sus propias variables locales como a las variables de la función externa, incluso después de que la función externa haya finalizado su ejecución */

const obtenerCliente = () => {
    const nombre = 'Fernando';
    function mostrarNombre(){
        console.log(nombre);
    }

    return mostrarNombre;
}

const cliente = obtenerCliente();
cliente();