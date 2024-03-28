/**Async Await */
/* async: async es una palabra clave que se coloca antes de una función para indicar que la función retornará una promesa. Dentro de una función async, puedes utilizar la palabra clave await para pausar la ejecución de la función hasta que una promesa se resuelva. Esto permite escribir código asíncrono de manera más similar a un estilo de programación síncrona.

await: await es una palabra clave que solo puede usarse dentro de una función async. Le dice al intérprete de JavaScript que detenga la ejecución de la función async hasta que la promesa especificada se resuelva. Cuando se utiliza await, la función async espera hasta que la promesa se resuelva o se rechace antes de continuar con la ejecución del código. */

function descargarClientes(){
    return new Promise((resolve, reject) => {
        const error = false;
        setTimeout( () => {
            if(!error){
                resolve('El Listado de clientes se descargo correctamente'); 
            } else {
                reject('No se pudo aplicar el descuento');
                
            }            
        }, 3000);

    });
}


async function ejecutar(){
    try {
        const respuesta = await descargarClientes();
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }

}

ejecutar();
console.log(2 + 2);