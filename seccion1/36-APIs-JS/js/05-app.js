/**Detectar cuando estamos viendo la página web actual */
document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('Ejecutar video...');
    }else{
        console.log('Pausar video...');
    }
});