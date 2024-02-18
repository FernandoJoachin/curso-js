/**Eventos del scroll*/
/* window.addEventListener('scroll', () => {
    const scrollPx = window.scrollY;
    console.log(scrollPx);
}) */

window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); //devuelve un objeto DOMRect que representa el tamaño y la posición de un elemento en relación con la ventana del navegador. Contiene propiedades como top, left, right, bottom, width y height, que proporcionan información sobre la posición y dimensiones del elemento en píxeles

    if(ubicacion.top < 784){
        console.log('Elemento visible');
    }else{
        console.log('Aun no, da más scroll');
    }
});