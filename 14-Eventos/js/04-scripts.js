/**Eventos en un formulario*/
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(event){
    event.preventDefault();
    console.log('Validar formulario');
    console.log(event.target.action);
}