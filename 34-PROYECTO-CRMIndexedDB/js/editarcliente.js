(function(){
    let DB;
    let idCliente;
    const formulario = document.getElementById('formulario');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    const empresaInput = document.getElementById('empresa');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        formulario.addEventListener('submit', actualizarCliente);

        const parametrosURL = new URLSearchParams(window.location.search);
        idCliente = parametrosURL.get('id')
        if(idCliente){
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 100);
        } 
    });

    function actualizarCliente(event){
        event.preventDefault();
        const nombre = nombreInput.value;
        const email = emailInput.value;
        const telefono = telefonoInput.value;
        const empresa = empresaInput.value;

        if(nombre === '' || email === '' || telefono === '' || empresa === ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        const clienteActualizado = {
            nombre,
            email,
            telefono,
            empresa,
            id: Number(idCliente)
        }

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.put(clienteActualizado);

        transaction.onerror = function(){
            imprimirAlerta('Oops. Hubo un error. Inténtelo nuevamente.', 'error');
        }

        transaction.oncomplete = function(){
            imprimirAlerta('El ciente se actualizo correctamente.');
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 2000);
        }
    }

    function obtenerCliente(id){
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(event){
            const cursor = event.target.result;
            if(cursor){
                if(cursor.value.id === Number(id)){
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
            }
        }
    }

    function llenarFormulario(datosCliente){
        const {nombre, email, empresa, telefono} = datosCliente;
        nombreInput.value = nombre;
        emailInput.value = email;
        empresaInput.value = empresa;
        telefonoInput.value = telefono;
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