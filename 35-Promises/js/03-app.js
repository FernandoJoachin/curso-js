/**Promise */
/* Son un mecanismo para manejar operaciones asíncronas. Proporcionan una manera más elegante y flexible de trabajar con código asíncrono en comparación con los callbacks. */

/* Las promesas tienen tres estados posibles:

1. Pending (pendiente): El estado inicial de una promesa. La promesa está en espera de ser cumplida o rechazada.

2. Fulfilled (cumplida): La promesa se cumplió satisfactoriamente, lo que significa que la operación asíncrona se completó con éxito.

3. Rejected (rechazada): La promesa no se pudo cumplir debido a un error durante la operación asíncrona. */

const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;
    if(descuento){
        resolve('Descuento aplicado.');
    }else{
        reject('No se puedo aplicar el descuento.');
    }
});

aplicarDescuento
    .then(resultado => imprimirRespuesta(resultado))
    .catch(error => imprimirRespuesta(error))

function imprimirRespuesta(respuesta){
    console.log(respuesta);
}