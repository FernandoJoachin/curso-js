const autenticado = true;

//Forma incorrecto
if(autenticado === true){
    console.log("Exito");
}else{
    console.log("Error");
}

//Forma correcto
if(autenticado){
    console.log("Exito");
}else{
    console.log("Error");
}

//Operador ternario
console.log(autenticado ? "Si esta autenticado" : "No esta autenticado");