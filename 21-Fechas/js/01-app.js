/**Objeto Date()*/
const diaHoy = new Date('11-7-2002');
let valor = diaHoy;
console.log(valor);

//Funciones get
valor = diaHoy.getFullYear();
console.log(valor);

valor = diaHoy.getMonth(); //Enero es igual a 0
console.log(valor);

valor = diaHoy.getDay();
console.log(valor);

valor = diaHoy.getMinutes();
console.log(valor);

valor = diaHoy.getTime();
console.log(valor);

//Funcoines set 
diaHoy.setFullYear(2200);
console.log(diaHoy);