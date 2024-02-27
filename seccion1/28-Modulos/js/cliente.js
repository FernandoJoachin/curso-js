export const nombreCliente = 'Fernando';
export const ahorro = 2500;

export function mostrarInformacion(nombreCliente, ahorro){
    console.log(`Cliente: ${nombreCliente} - Ahorro: $${ahorro}`);
}

export function verificarSaldo(ahorro){
    if(ahorro > 0){
        console.log('Tienes saldo');
    }else{
        console.log('No tienes saldo');
    }
}

export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        console.log(`Cliente: ${this.nombre} - Ahorro: $${this.ahorro}`);
    }
}

//Solo se puede uno por archivo
export default function exportDefault(){
    console.log('Este es el export default');
}