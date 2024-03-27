/**Operador OR */
const efectivo = 300;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
    console.log('Si se puede pagar');
}else{
    console.log('Fondos insuficientes');
}