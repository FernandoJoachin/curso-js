// Variables
const formulario = document.getElementById('agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    preguntarPresupuesto();
    formulario.addEventListener('submit', agregarGasto);
});

//Clases
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total, gastado) => total + gastado.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad; 
        document.getElementById('total').textContent = presupuesto;
        document.getElementById('restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipoMensaje){
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');

        if(tipoMensaje === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
       
        divMensaje.textContent = mensaje;
        document.getElementsByClassName('primario')[0].insertBefore(divMensaje, formulario);

        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarGastos(gastos){
        this.limpiarHTML();
        
        gastos.forEach(gasto => {
            const {nombre, cantidad, id } = gasto;

            const nuevoGasto = document.createElement('LI');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id; //Forma alternativa de usar setAttribute
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$${cantidad}</span>`;

            const eliminarBtn = document.createElement('BUTTON');
            eliminarBtn.classList.add('btn', 'btn-danger', 'borrar-gasto');
            eliminarBtn.textContent = 'X';
            eliminarBtn.onclick = () => {
                eliminarGasto(id);
            };
            nuevoGasto.appendChild(eliminarBtn);

            gastosListado.appendChild(nuevoGasto);
        });
    }

    actualizarRestante(restante){
        document.getElementById('restante').textContent = restante; 
    }

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;
        const restanteDiv = document.getElementsByClassName('restante');

        if( (presupuesto / 4) > restante) {
            restanteDiv[0].classList.remove('alert-success', 'alert-warning');
            restanteDiv[0].classList.add('alert-danger');
        }else if((presupuesto / 2) > restante) {
            restanteDiv[0].classList.remove('alert-success');
            restanteDiv[0].classList.add('alert-warning');
        }else{
            restanteDiv[0].classList.remove('alert-danger', 'alert-warning');
            restanteDiv[0].classList.add('alert-success');
        }

        if(restante <= 0 ) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        } 
    }

    limpiarHTML(){
        while(gastosListado.firstChild){
            gastosListado.removeChild(gastosListado.firstChild);
        }
    }
}

let presupuesto;
const ui = new UI();

//Funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(event){
    event.preventDefault();

    const nombre = document.getElementById('gasto').value;
    const cantidad = Number(document.getElementById('cantidad').value);

    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }

    const gasto = {id:Date.now(), nombre, cantidad};
    presupuesto.nuevoGasto(gasto);
    ui.imprimirAlerta('Gasto agregado correctamente');

    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);

    formulario.reset();
}

function eliminarGasto(id){
    presupuesto.eliminarGasto(id);
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}
