/**Comunicacion funciones */
iniciarApp();
function iniciarApp(){
    console.log('Iniciando App...')
    cargarLogin();
}

function cargarLogin(){
    console.log('Ingrese sus datos por favor');
    console.log('Usuario: TheFerbyuz');
    console.log('Contraseña: ********');
    autenticarUsuario('TheFerbyuz');
}

function autenticarUsuario(usuario){
    console.log('Autenticando usuario, espere...');
    console.log(`Autenticación exitosa: Bienvenido ${usuario}`);
}