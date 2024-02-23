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
    formulario.reset();
}
