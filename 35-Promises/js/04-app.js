/**De Callback Hell a Promises */
const paises = [];

const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregando: ${pais}`);
    }, 3000);
});

nuevoPais('Alemania')
    .then(respuesta => {
        console.log(respuesta);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then(respuesta => {
        console.log(respuesta);
        console.log(paises);
        return nuevoPais('Inglatera');
    })
    .then(respuesta => {
        console.log(respuesta);
        console.log(paises);
    })