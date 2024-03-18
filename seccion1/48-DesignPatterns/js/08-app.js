/**Mediator */
function Vendedor (nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en precio de $${precio}`);
    },

    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador (nombre){
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : $${cantidad}`);
    }
}

function Subasta(){
    let compradores = {};

    return {
        registrar: usuario =>  {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//Crear objetos
const fer = new Comprador('Fernando');
const roberto = new Comprador('Roberto');
const vendedor = new Vendedor('Vendedor de arte');
const subasta = new Subasta();

//Registrar en la subaste
subasta.registrar(fer);
subasta.registrar(roberto);
subasta.registrar(vendedor);

vendedor.oferta('El Jarrón Hu', 12300000);
fer.oferta(14000000, fer);
roberto.oferta(17000000, roberto);
vendedor.vendido(roberto.nombre);