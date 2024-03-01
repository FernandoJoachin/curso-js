/**Ejecutar pantalla completa con JS */
const abrirBtn = document.getElementById('abrir-pantalla-completa');
const salirBtn = document.getElementById('salir-pantalla-completa');

abrirBtn.addEventListener('click', () => {
    document.documentElement.requestFullscreen();
});

salirBtn.addEventListener('click', () => {
    document.exitFullscreen();
});