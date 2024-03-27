/**Module Pattern */
const modulo1 = (function(){
    const nombre = 'Juan';

    function hola(){
        console.log('hola');
    }

    return {
        nombre,
        hola
    }
})();

//Ponerlo en otro archivo para ver su funcionamiento
/* console.log(modulo1.nombre);
modulo1.hola(); */