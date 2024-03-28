/**Modificar Textos o Imagenes con JS*/

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//Existe 3 maneras de hacer al contenido
console.log(encabezado.innerText); //Si en CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent); //Si en CSS - visibility: hidden; sí lo va a encontrar
console.log(encabezado.innerHTML); //Se trae el HTML

//Modificar Imagenes
const img = document.querySelector('.card img');
img.src = 'img/hacer2.jpg';