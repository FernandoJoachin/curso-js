/**Funciones que Retornan funciones */
const obtenerCliente = () => () => console.log('Fernando Joachin');
const fn = obtenerCliente();
fn();