/**Ventajas de los Arrow Functions */
const aprendiendo1 = function (tecnologia1, tecnologia2){
    return `Aprendiendo ${tecnologia1} y ${tecnologia2}`;
}
console.log(aprendiendo1('JavaScript', 'Java'));

const aprendiendo2 = (tecnologia1, tecnologia2) => `Aprendiendo ${tecnologia1} y ${tecnologia2}`; //Si solo hay un parámetro se puede quitar los parantésis
console.log(aprendiendo2('Python', 'PHP'));