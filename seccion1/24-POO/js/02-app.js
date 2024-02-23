/**Herencia */
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenido(){
        return 'Bienvenido al cajero';
    }
}

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    static bienvenido(){
        return 'Bienvenido al cajero de la empresa';
    }
}
const fer = new Cliente('Fernando', '2500');
console.log(fer);
console.log(Cliente.bienvenido());

const loopcrack = new Empresa('Loopcrack', '100000000', '1234567890', 'Desarrollo web');
console.log(loopcrack);
console.log(Empresa.bienvenido());