/**Symbols */
/* Son valores únicos e inmutables que se pueden utilizar como identificadores para propiedades de objetos. Son útiles cuando necesitas crear propiedades únicas que no colisionen con propiedades existentes o futuras de un objeto. */

console.log(Symbol() === Symbol()); //Los symbols nunca son iguales

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

persona[nombre] = 'Fernando';
persona[apellido] = 'Joachin';
persona.tipoCliente = 'VIP';
persona.saldo = 500;

console.log(persona);
console.log(persona[nombre]);

//Las propiedades que utilizan un symbol no son iterables
for(let i in persona){
    console.log('Las propiedades son: '+ i);
}

//Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};
cliente[nombreCliente] = 'Fer';
console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);
