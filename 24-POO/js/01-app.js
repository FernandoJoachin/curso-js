/**Clases */

//Class declaration
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
const fer = new Cliente('Fernando', '2500');
console.log(fer.mostrarInformacion());
console.log(fer);
// console.log(fer.bienvenido()); - marca error
console.log(Cliente.bienvenido());

//Class expression
const Empleado = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion(){
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}
const roberto = new Empleado('Roberto', '1350');
console.log(roberto.mostrarInformacion());
console.log(roberto);