/**Eventos */
/* Es un evento que se dispara en el objeto document cuando el HTML y el árbol DOM de una página web han sido completamente cargados y analizados, sin esperar a que los recursos externos (como imágenes, hojas de estilo CSS y scripts) se hayan descargado por completo. */

console.log('Documento no listo');
document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento Listo');
})
console.log('Documento todavía listo');