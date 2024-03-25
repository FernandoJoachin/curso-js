/**Async Await en function express */
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


const ejecutar = async () => {
    try {
        const respuesta = await descargarClientes();
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }

}

ejecutar();
console.log(2 + 2);