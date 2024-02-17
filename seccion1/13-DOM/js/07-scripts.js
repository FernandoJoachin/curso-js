/**Cambiando el CSS con JavaScript*/
const encabezado = document.querySelector('h1');
encabezado.style.backgroundColor = 'blue';
encabezado.style.fontFamily = 'Times New Roman';
encabezado.style.textTransform = 'uppercase'
console.log(encabezado);

//Agregar y remover clases
const card = document.querySelector('.card');
card.classList.add('nuevo-clase', 'segunda-clase');
card.classList.remove('segunda-clase');
console.log(card.classList);
