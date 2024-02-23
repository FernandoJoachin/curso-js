/**Atributos privados */
class Cliente{
    #nombre;

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenido(){
        return 'Bienvenido al cajero';
    }

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }
}

const fer = new Cliente('Fernando', '2500');
console.log(fer);
//console.log(fer.#nombre); - Marca error porque la variable es privada

fer.setNombre('Roberto')
console.log(fer);