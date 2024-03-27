/**Detectar si hay conexión a internet o no */
window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado(){
    if(navigator.onLine){
        console.log('Estas conectado a internet');
    }else{
        console.log('No estas conectado a internet');
    }
}