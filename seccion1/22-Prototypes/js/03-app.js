/**Creando un Prototype*/
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//NOTA: Con prototypes es mejor utilizar function porque Arrow Function busca en la ventana global y Function busca en el objeto actual.
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

const fer = new Cliente('Fernando', 3000);

console.log(fer.tipoCliente());
console.log(fer.nombreClienteSaldo());
fer.retiraSaldo(2000);
console.log(fer.nombreClienteSaldo());

