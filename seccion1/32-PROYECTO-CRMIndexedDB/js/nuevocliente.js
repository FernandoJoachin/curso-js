(function(){
    let DB;
    const formulario = document.getElementById('formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
        formulario.addEventListener('submit', validarCliente);
    })

    function validarCliente(event){
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const empresa = document.getElementById('empresa').value;

        if(nombre === '' || email === '' || telefono === '' || empresa === ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        cliente.id = Date.now();
        crearNuevoCliente(cliente);
    }

    function crearNuevoCliente(cliente){
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.add(cliente);

        transaction.onerror = function(){
            imprimirAlerta('Oops. Hubo un error. Inténtelo nuevamente.', 'error');
        }

        transaction.oncomplete = function(){
            imprimirAlerta('El ciente se guardo correctamente');
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 2000);
        }
    }

    function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm', 1);
    
        abrirConexion.onerror = function(){
            console.log('Hubo un error al crear la base de datos');
        }
    
        abrirConexion.onsuccess = function(){
            console.log('Base de datos creada');
            DB = abrirConexion.result;
        }
    }
})();