/**Composition */
const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Correo: ${info.email}`);
    }
});

const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
});

const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
});

const guardarEmail = info => ({
    agregarEmail(email){
        console.log(`Guardando email de: ${info.nombre}`);
        info.email = email;
    }
});

function Cliente(nombre, email, empresa) {
    let info = {
        nombre, 
        email, 
        empresa
    }

    return Object.assign(
        info, 
        obtenerNombre(info),
        obtenerEmail(info), 
        obtenerEmpresa(info),
        guardarEmail(info)
    );
}
function Empleado(nombre, email, puesto) {
    let info = {
        nombre, 
        email, 
        puesto
    }

    return Object.assign(
        info, 
        obtenerNombre(info),
        obtenerEmail(info),
        obtenerPuesto(info),
        guardarEmail(info)
    );
}

const cliente = Cliente('Luis', null, 'Loopcrack');
cliente.mostrarNombre();
cliente.agregarEmail('loopcrack@cliente.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('==============');

const empleado = Empleado('Fernando', null, 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail('fercho@empleado.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();