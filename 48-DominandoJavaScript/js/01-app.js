/**Scope */
/* En JavaScript, el término "scope" (alcance) se refiere al contexto en el cual las variables y funciones son accesibles durante la ejecución del código. El alcance determina qué partes del código pueden acceder a qué variables y en qué momento. */
const login = true;
function clienteLogin(){
    const cliente = 'Roberto';
    //console.log(cliente);
    if(login){
        const cliente = 'Admin';
        console.log(cliente);
    }
}
clienteLogin();