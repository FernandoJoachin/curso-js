const pacienteInput = document.getElementById('paciente');
const propietarioInput = document.getElementById('propietario');
const emailInput = document.getElementById('email');
const fechaInput = document.getElementById('fecha');
const sintomasInput = document.getElementById('sintomas');
const formulario = document.getElementById('formulario-cita')
const formularioInput = document.querySelector('#formulario-cita input[type="submit"]');
const contenedorCitas = document.getElementById('citas');

let editando = false;

pacienteInput.addEventListener('change', datosCita);
propietarioInput.addEventListener('change', datosCita);
emailInput.addEventListener('change', datosCita);
fechaInput.addEventListener('change', datosCita);
sintomasInput.addEventListener('change', datosCita);

formulario.addEventListener('submit', submitCita);

const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}
class Notificacion {
    constructor({mensaje, tipo}){
        this.mensaje = mensaje;
        this.tipo = tipo;
        this.mostrar();
    }

    mostrar(){
        const alerta = document.createElement('DIV');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');
       
        const alertaPrevia = document.querySelector('.alert');
        alertaPrevia?.remove();

        this.tipo === 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500'); 

        alerta.textContent = this.mensaje;
        formulario.parentElement.insertBefore(alerta, formulario);
    
        setTimeout( () => {
            alerta.remove();
        }, 4000);
    }

}

class AdminCitas {
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
        this.mostrar();
    }

    editarCita(citaAEditar){
        this.citas = this.citas.map(cita => cita.id === citaAEditar.id ? citaAEditar : cita);
        this.mostrar();
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
        this.mostrar();
    }

    mostrar(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }

        if(this.citas.length === 0){
            contenedorCitas.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>';
            return
        }

        //Codigo proporcionado
        this.citas.forEach(cita => {
            const divCita = document.createElement('DIV');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');
        
            const paciente = document.createElement('P');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;
        
            const propietario = document.createElement('P');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;
        
            const email = document.createElement('P');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;
        
            const fecha = document.createElement('P');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;
        
            const sintomas = document.createElement('P');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2', 'btn-editar');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
            btnEditar.onclick = () => cargarEdicion(cita);

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
            btnEliminar.onclick = () => this.eliminarCita(cita.id);
        
            const contenedorBtn = document.createElement('DIV');
            contenedorBtn.classList.add('flex', 'justify-between', 'mt-10');

            contenedorBtn.appendChild(btnEditar);
            contenedorBtn.appendChild(btnEliminar);

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBtn);
            contenedorCitas.appendChild(divCita);
        });    
    }
}

function datosCita(event){
    citaObj[event.target.name] = event.target.value;
}

const administrarCitas = new AdminCitas()

function submitCita(event){
    event.preventDefault();

    if(Object.values(citaObj).some(valor => valor.trim() === '')){
        new Notificacion({
            mensaje: 'Todos los mensajes son obligatorios',
            tipo: 'error'
        });
        return;
    }

    if(editando){
        administrarCitas.editarCita({...citaObj});
        new Notificacion({
            mensaje: 'Guardado correctamente',
            tipo: 'exito'
        });
    }else{
        administrarCitas.agregarCita({...citaObj});
        new Notificacion({
            mensaje: 'Paciente agregado correctamente',
            tipo: 'exito'
        });
    }

    formulario.reset();
    reiniciarCitaObj();
    formularioInput.value = 'Registrar paciente';
    editando = false;
 
}

function reiniciarCitaObj(){
    Object.assign(citaObj, {
        id: generarId(),
        paciente: '',
        propietario: '',
        email: '',
        fecha: '',
        sintomas: ''
    });
}

function generarId(){
    return Math.random().toString(36).substring(2) + Date.now();
}

function cargarEdicion(cita){
    Object.assign(citaObj, cita);

    pacienteInput.value = cita.paciente;
    propietarioInput.value = cita.propietario;
    emailInput.value = cita.email;
    fechaInput.value = cita.fecha;
    sintomasInput.value = cita.sintomas;

    editando = true;
    formularioInput.value = 'Guardar cambios';
}
