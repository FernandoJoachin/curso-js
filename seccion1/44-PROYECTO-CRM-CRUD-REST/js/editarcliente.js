import { editarCliente, obtenerCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

(function(){
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    const empresaInput = document.getElementById('empresa');
    const idInput = document.getElementById('id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id');
        const cliente = await obtenerCliente(idCliente);
        mostrarCliente(cliente);

        const formulario = document.getElementById('formulario');
        formulario.addEventListener('submit', validarCliente);
    });

    function mostrarCliente(cliente){
        const {nombre, empresa, email, telefono, id} = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }

    async function validarCliente(event){
        event.preventDefault();
        
        const cliente = {
            nombre: nombreInput.value, 
            email: emailInput.value, 
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        }

        if(validar(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        await editarCliente(cliente);
    }
})();