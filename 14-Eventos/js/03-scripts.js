/**Eventos del teclado / Eventos sobre los inputs */
const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => {
    console.log('Presionando una tecla');
})

busqueda.addEventListener('keyup', () => {
    console.log('Soltando una tecla');
})

//Se dispara en un elemento HTML cuando este pierde el foco, es decir, cuando el usuario cambia el foco de un elemento
busqueda.addEventListener('blur', () => {
    console.log('Perdiendo el foco del input');
})

busqueda.addEventListener('copy', () => {
    console.log('Copiando elemento');
})

busqueda.addEventListener('paste', () => {
    console.log('Pegando elemento');
})

busqueda.addEventListener('cut', () => {
    console.log('Cortando elemento');
})

busqueda.addEventListener('input', () => {
    console.log('Hace todo lo anterior menos el blur');
})


busqueda.addEventListener('input', (event) => {
    if(event.target.value === ''){
        console.log('Campo vacio');
    }else{
        console.log(event.target.value);
    }
})

