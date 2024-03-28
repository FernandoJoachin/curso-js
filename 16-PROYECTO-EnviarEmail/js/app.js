document.addEventListener('DOMContentLoaded', () => {
    const formulario = {
        email: '',
        asunto: '',
        mensaje: '',
        cc: ''
    }

    const inputEmail = document.getElementById('email');
    const inputCC = document.getElementById('cc');
    const inputAsunto = document.getElementById('asunto');
    const inputMensaje = document.getElementById('mensaje');
    const form = document.getElementById('formulario');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = document.getElementById('resetBtn');
    const spinner = document.getElementById('spinner');

    inputEmail.addEventListener('blur', validarInputs);
    inputCC.addEventListener('blur', validarInputs);
    inputAsunto.addEventListener('blur', validarInputs);
    inputMensaje.addEventListener('blur', validarInputs);

    form.addEventListener('submit', enviarFormulario);
    
    resetBtn.addEventListener('click', (event) => {
        event.preventDefault();
        reiniciarFormulario();
    })

    function enviarFormulario(event){
        event.preventDefault();
        
        spinner.classList.remove('hidden')
        setTimeout(() => {
            spinner.classList.add('hidden');

            reiniciarFormulario();

            // Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';

            form.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove(); 
            }, 3000);
        }, 3000);
    }

    function validarInputs(event){
        if(event.target.value.trim() === '' && event.target.id !== 'cc'){
            mostrarAlerta(`El campo ${event.target.id} es obligatorio`, event.target.parentElement);
            formulario[event.target.name] = '';
            comprobarFormulario();
            return;
        }
        

        if((event.target.id === 'email') && !validarEmail(event.target.value)){

            mostrarAlerta('El email no es válido', event.target.parentElement);
            formulario[event.target.name] = '';
            comprobarFormulario()
            return;
        }

        if((event.target.id === 'cc') && event.target.value.trim() !== '' && !validarEmail(event.target.value)){
            mostrarAlerta('El email no es válido', event.target.parentElement);
            formulario[event.target.name] = '';
            comprobarFormulario()
            return;
        }

        console.log('a');
        limpiarAlerta(event.target.parentElement);

        formulario[event.target.name] = event.target.value.trim().toLowerCase();

        comprobarFormulario();
    }

    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia);
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'alerta-error');
        referencia.appendChild(error);
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarFormulario(){
        let resultado = false;

        for (let campo in formulario) {
            if (campo !== 'cc' && formulario[campo] === '') {
                resultado = true;
                break;
            }
        }
        
        if(resultado) {
            submitBtn.classList.add('opacity-50');
            submitBtn.disabled = true;
            return
        } 
        submitBtn.classList.remove('opacity-50');
        submitBtn.disabled = false;
    }

    function reiniciarFormulario() {
        email.email = '';
        email.cc = '';
        email.asunto = '';
        email.mensaje = '';

        form.reset();
        comprobarFormulario();
        limpiarAlertas();
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.alerta-error');
        if (alerta) { 
            alerta.remove();
        } 
    }

    function limpiarAlertas(){
        const alertas = document.querySelectorAll('.alerta-error');
        if (alertas) { 
            alertas.forEach(alerta => {
                alerta.remove();
            });
        } 
    }
});