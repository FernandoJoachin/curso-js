/**QuerySelectorAll*/
/*  Permite seleccionar múltiples elementos del DOM utilizando un selector CSS y devuelve una colección estática de nodos que coinciden con el selector especificado.*/

const card = document.querySelectorAll('.card');
console.log(card);

//Selecionar un elemento que no existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste); //Devuelve NodeList vacio que es como un arreglo

//NOTA: Incluso funciona si buscará por un ID aunque sea mala práctica