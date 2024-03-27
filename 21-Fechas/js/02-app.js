/**MomentJS */
const diaHoy = new Date();
moment.locale('es');
console.log(moment().format('MMM Do YYY h:mm:ss a'));
console.log(moment().format('LLL', diaHoy));
console.log(moment().add(3, 'day').calendar());