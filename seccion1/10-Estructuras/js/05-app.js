/**Switch case */
const metodoPago = "Tarjet";

switch (metodoPago) {
    case "Efectivo":
        pagar(metodoPago);
        break;
    case "Tarjeta":
        console.log(`Estas pagando con ${metodoPago}`);
        break;
    case "Cheque":
        console.log(`Estas pagando con ${metodoPago}`);
        break;

    default:
        console.log('Lo sentimos, no pudimos reconocer el tipo de método de pago que estas efectuando.')
        break;
}

function pagar(metodoPago){
    console.log(`Estas pagando con ${metodoPago}`);
}