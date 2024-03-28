/*Parámetros*/
function sumatoria(sumandos){
    let suma = 0;
    sumandos.forEach(sumando => {
        suma = suma + sumando;
    });
    console.log(suma);
}
sumatoria([2,3,7]);

function saludar(nombre,apellido){
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar('Fernando', 'Joachin');