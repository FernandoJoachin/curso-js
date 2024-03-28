/**Callbacks */
/* Es una función que se pasa como argumento a otra función y que se ejecuta después de que se haya completado alguna operación asíncrona o algún proceso específico. */

const paises = ["Estados Unidos", "Canadá", "Reino Unido", "Australia", "Japón"];

function nuevosPaises(pais, callback){
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises(){
    setTimeout(() => {
        paises.forEach(pais => console.log(pais));
    }, 1000);
}

nuevosPaises('México', mostrarPaises)