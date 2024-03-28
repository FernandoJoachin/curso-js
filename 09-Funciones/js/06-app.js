/*Parámetros por Default*/
function saludar(nombre = 'Jane Doe',apellido = ''){
    console.log(`Hola ${nombre} ${apellido}`)
}

saludar('Fernando', 'Joachin');
saludar('Fernando');
saludar();
