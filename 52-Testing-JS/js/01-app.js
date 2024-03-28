/**Creando un Mini Framework para Testing */
function sumar(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

let resultado = sumar(2,3);
let esperado = 3;

if(resultado !== esperado){
    console.error(`El ${resultado} es diferente a lo esperado: la prueba no paso`)
}else{
    console.log('La prueba paso correctamente');
}

resultado = restar(5,2);
esperado = 3;

if(resultado !== esperado){
    console.error(`El ${resultado} es diferente a lo esperado: la prueba no paso`)
}else{
    console.log('La prueba paso correctamente');
}
