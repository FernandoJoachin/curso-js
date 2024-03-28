/**Operando AND */
const usuario = false;
const cuentaConfirmada = false;

if(usuario && cuentaConfirmada){
    console.log('Iniciando sesión');
}else if(!usuario && !cuentaConfirmada){
    console.log('Por favor, crea una cuenta');
}else if(!cuentaConfirmada){
    console.log('Por favor confirme su cuenta')
} else if(!usuario){
    console.log('Usuario no válido');
}