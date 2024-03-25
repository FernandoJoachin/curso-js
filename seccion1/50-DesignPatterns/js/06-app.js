/**Mixin Pattern*/
class Persona {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre persona: ${this.nombre}, Email: ${this.email}`);
    },

    mostrarNombre(){
        console.log(`Mi nombre es: ${this.nombre}`);
    }
}

// Añadir funcionesPersona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona);

const persona = new Persona('Fernando', 'fernando@correo.com');
persona.mostrarInformacion();
persona.mostrarNombre();