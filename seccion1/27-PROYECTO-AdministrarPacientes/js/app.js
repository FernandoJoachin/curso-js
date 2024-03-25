const mascotaInput = document.getElementById('mascota');
const propietarioInput = document.getElementById('propietario');
const telefonoInput = document.getElementById('telefono');
const fechaInput = document.getElementById('fecha');
const horaInput = document.getElementById('hora');
const sintomasInput = document.getElementById('sintomas');

const formulario = document.getElementById('nueva-cita');
const contenedorCitas = document.getElementById('citas');

let editando;

class Citas {
    constructor(){
        this.citas = []
    }

    agregarCita(cita){
        this.citas = [...this.citas, cita];
    }

    editarCita(citaAEditar) {
        this.citas = this.citas.map(cita => cita.id === citaAEditar.id ? citaAEditar : cita);
    }

    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
    }
}

class UI {
    imprimirAlerta(mensaje, tipoMensaje){
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
    
        if(tipoMensaje === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
       
        divMensaje.textContent = mensaje;
        document.getElementById('contenido').insertBefore(divMensaje, document.getElementsByClassName('agregar-cita')[0]);
    
        setTimeout( () => {
            divMensaje.remove();
        }, 4000);
    }

    imprimirCitas({citas}){
        this.limpiarHTML();

        citas.forEach(cita => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
            const divCita = document.createElement('DIV');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            const mascotaParrafo = document.createElement('H2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('P');
            propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span>${propietario}`;

            const telefonoParrafo = document.createElement('P');
            telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Teléfono: </span>${telefono}`;

            const fechaParrafo = document.createElement('P');
            fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span>${fecha}`;

            const horaParrafo = document.createElement('P');
            horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span>${hora}`;

            const sintomasParrafo = document.createElement('P');
            sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Síntomas: </span>${sintomas}`;

            const eliminarBtn = document.createElement('BUTTON');
            eliminarBtn.classList.add('btn', 'btn-danger', 'mr-2');
            eliminarBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /> </svg>'
            eliminarBtn.onclick = () => eliminarCita(id);

            const editarBtn = document.createElement('BUTTON');
            editarBtn.classList.add('btn', 'btn-info');
            editarBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>';
            editarBtn.onclick = () => editarCita(cita);

            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(eliminarBtn);
            divCita.appendChild(editarBtn);

            contenedorCitas.appendChild(divCita);
        });
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

const administrarCitas = new Citas();
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);
    formulario.addEventListener('submit', nuevaCita);
});


const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora:'',
    sintomas: ''
}

function datosCita(event){
    citaObj[event.target.name] = event.target.value;
}

function nuevaCita(event){
    event.preventDefault();

    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    if(mascota === '' || propietario === '' || telefono === '' || fecha === ''  || hora === '' || sintomas === ''){
        ui.imprimirAlerta('Todos los mensajes son obligatorios', 'error')
        return;
    }

    if(editando){
        ui.imprimirAlerta('La cita se editó correctamente');
        administrarCitas.editarCita({...citaObj});
        formulario.querySelector('button[type="submit"]').textContent = 'Crear cita';
        editando = false;

    }else{
        citaObj.id = Date.now();
        administrarCitas.agregarCita({...citaObj});
        ui.imprimirAlerta('La cita se agregó correctamente');
    }

    reiniciarCitaObj();
    formulario.reset();

    ui.imprimirCitas(administrarCitas);

}

function reiniciarCitaObj(){
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

function eliminarCita(id){
    administrarCitas.eliminarCita(id);
    ui.imprimirAlerta('La cita se eliminó correctamente');
    ui.imprimirCitas(administrarCitas);
}

function editarCita(cita){
    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar cambios';

    editando = true;
}