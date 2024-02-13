/**Múltiples funciones que se pasan valores */
let total = 0;
function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(){
    return total * 1.15;
}

agregarCarrito(100);
agregarCarrito(345);
console.log(`Total de la compra sin impuesto: $${total}`);

const totalPagar = calcularImpuesto();
console.log(`Total de la compra sin impuesto: $${totalPagar}`);