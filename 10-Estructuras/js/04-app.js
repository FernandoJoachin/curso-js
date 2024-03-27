/**Else if */
const dineroActual = 100;
const totalPagar = 200;
const tarjeta = true;

if(dineroActual > totalPagar){
    console.log('Tienes dinero en efectivo suficiente')
} else if(tarjeta){
    console.log('Puedes pagar con tarjeta')
}
else{
    console.log('No tienes dinero en efectivo suficiente')
}
