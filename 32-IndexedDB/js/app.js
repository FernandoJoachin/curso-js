let DB;
document.addEventListener('DOMContentLoaded', () => {
    crmDB();
    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB(){
    //Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    //Si hay error
    crmDB.onerror = function(){
        console.log('Hubo un error al crear la base de datos');
    }

    //Si se creo bien 
    crmDB.onsuccess = function(){
        console.log('Base de datos creada');
        DB = crmDB.result;
    }

    //Configuracion de la base de datos
    crmDB.onupgradeneeded = function(event){
        const db = event.target.result;
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        objectStore.createIndex('nombre','nombre', {unique: false});
        objectStore.createIndex('email','email', {unique: true});
        objectStore.createIndex('telefono','telefono', {unique: false});
        console.log('Columnas creadas');
    }
}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function(){
        console.log('Transaction completada');
    }

    transaction.onerror = function(){
        console.log('Hubo un error en la transaction');
    }

    const objectStore = transaction.objectStore('crm');
    const nuevoCliente = {
        telefono: 1234567890,
        nombre: 'Fernando',
        emial: 'ejemplo@correo.com'
    }
    const peticion = objectStore.add(nuevoCliente); //put para actualizar
    console.log(peticion);
}