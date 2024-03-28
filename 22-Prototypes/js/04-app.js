/**Heredar un Prototype */
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){ 
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Plata';
    } else {
        tipo  = 'Bronce';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function()  {
    return `Nombre: ${this.nombre}, Saldo: $${this.saldo}, Tipo cliente: ${this.tipoCliente()} `;
}

Cliente.prototype.retiraSaldo = function(retiro)  {
    this.saldo -= retiro;
}


function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

// Heredar las función de CLiente a Persona
Persona.prototype = Object.create(Cliente.prototype);

// Heredar el constructor de Cliente a Persona
Persona.prototype.constructor = Cliente;

Persona.prototype.mostrarTelefono = function(){
    return `El teléfono del cliente es: ${this.telefono}`
}

const roberto = new Persona('Roberto', 15000, 1234567890);
console.log(roberto.nombreClienteSaldo());
console.log(roberto.mostrarTelefono());