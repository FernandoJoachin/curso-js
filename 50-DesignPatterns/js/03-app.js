/**Singleton */
let instacia = null;
class Persona {
    constructor(nombre, email){
        if(!instacia){
            this.nombre = nombre;
            this.email = email;
            instacia = this;
        }else{
            return instacia;
        }
    }
}

const persona = new Persona('Fernando', 'fernando@correo.com');
console.log(persona);

const persona2 = new Persona('Roberto', 'roberto@correo.com');
console.log(persona2);