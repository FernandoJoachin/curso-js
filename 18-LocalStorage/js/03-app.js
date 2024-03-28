/**Elimminar un elemento del Local Storage */
localStorage.removeItem('producto');

/**Actualizar un elemento del Local Storage */
const mesesArray  = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Abril');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

//**Eliminar todo del Local Storage */
localStorage.clear();