/**Obtener elementos del Local Storage */
const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));

const mesesJSON = localStorage.getItem('meses');
console.log(JSON.parse(mesesJSON));