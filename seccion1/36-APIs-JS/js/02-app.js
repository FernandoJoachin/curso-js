/**Intersection Observer */
/* Es una API de JavaScript que permite a los desarrolladores detectar cuando un elemento HTML entra o sale de la ventana gráfica del navegador o de otro contenedor especificado. */
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting){
            console.log('Es visible');
        }else{
            console.log('No es visible');
        }
    });

    observer.observe(document.querySelector('.premium'));
});